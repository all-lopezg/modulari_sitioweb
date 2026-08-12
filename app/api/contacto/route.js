// Envío del formulario de contacto mediante Resend (plan gratuito: 3.000 correos/mes).
// La API key vive solo en el servidor (.env.local); el navegador nunca la ve.
// Acepta JSON (fetch del navegador) o FormData (fallback nativo sin JS).

const DESTINO = process.env.CONTACT_EMAIL || 'contacto@modulari.cl'
const REMITENTE = process.env.RESEND_FROM || 'contacto@modulari.cl'

const LIMITES = { nombre: 100, direccion: 200, email: 200, telefono: 30, asunto: 200, mensaje: 5000 }

// Escapa el texto del usuario antes de insertarlo en el HTML del correo.
const escapar = (valor = '') => String(valor)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')

// Plantilla del correo con estilos inline (compatibles con todos los clientes de correo).
const plantillaCorreo = ({ nombre, direccion, email, telefono, asunto, mensaje }) => {
    const fila = (etiqueta, valor) => valor
        ? `<tr>
            <td style="padding:8px 0; color:#6B7280; width:170px; vertical-align:top;">${etiqueta}</td>
            <td style="padding:8px 0; color:#111827; font-weight:600;">${valor}</td>
          </tr>`
        : ''
    return `<!DOCTYPE html>
<html lang="es">
<head><meta charset="utf-8"></head>
<body style="margin:0; padding:0; background:#F4F6F8;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F6F8; padding:32px 16px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background:#FFFFFF; border-radius:12px; overflow:hidden; font-family:Arial, Helvetica, sans-serif;">

<tr>
<td bgcolor="#05A2E7" style="padding:28px 32px; text-align:center;">
<div style="color:#FFFFFF; font-size:24px; font-weight:bold; letter-spacing:8px;">MODULARI</div>
<div style="color:#D9F1FC; font-size:13px; margin-top:6px; letter-spacing:2px;">NUEVO MENSAJE DE CONTACTO</div>
</td>
</tr>

<tr>
<td style="padding:28px 32px;">
<div style="color:#111827; font-size:15px; font-weight:bold; padding-bottom:8px; border-bottom:2px solid #05A2E7;">Datos del cliente</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:8px; font-size:14px;">
${fila('Nombre', nombre)}
${fila('Lugar del evento', direccion)}
${fila('Email', email)}
${fila('Teléfono', telefono)}
${fila('Asunto', asunto)}
</table>

<div style="margin-top:24px; color:#111827; font-size:15px; font-weight:bold; padding-bottom:8px; border-bottom:2px solid #05A2E7;">Mensaje</div>
<div style="margin-top:12px; background:#F3F4F6; border-left:4px solid #05A2E7; border-radius:6px; padding:14px 16px; color:#374151; font-size:14px; line-height:1.7; white-space:pre-wrap;">${mensaje}</div>
</td>
</tr>

<tr>
<td bgcolor="#0F172A" style="padding:18px 32px; text-align:center; color:#94A3B8; font-size:12px;">
contacto@modulari.cl · www.modulari.cl
</td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

export async function POST(request) {
    try {
        if (!process.env.RESEND_API_KEY) {
            console.error('Falta RESEND_API_KEY en .env.local')
            return Response.json({ success: false, error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 500 })
        }

        const esJSON = (request.headers.get('content-type') || '').includes('application/json')
        const datos = esJSON ? await request.json() : Object.fromEntries(await request.formData())

        const contenido = {
            nombre: String(datos.nombre || '').trim(),
            direccion: String(datos.direccion || '').trim(),
            email: String(datos.email || '').trim(),
            telefono: String(datos.telefono || '').trim(),
            asunto: String(datos.asunto || '').trim(),
            mensaje: String(datos.mensaje || '').trim(),
        }

        // Validación server-side (los límites de largo evitan abuso del endpoint público).
        const errores = []
        if (!contenido.nombre || !contenido.email || !contenido.mensaje) errores.push('Faltan campos obligatorios.')
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contenido.email)) errores.push('El email no es válido.')
        if (Object.entries(contenido).some(([campo, valor]) => valor.length > LIMITES[campo])) {
            errores.push('Algunos campos superan el largo máximo.')
        }
        if (errores.length) {
            return Response.json({ success: false, error: errores.join(' ') }, { status: 400 })
        }

        const seguro = Object.fromEntries(Object.entries(contenido).map(([campo, valor]) => [campo, escapar(valor)]))
        const asuntoCorreo = `Nuevo mensaje de contacto${contenido.asunto ? `: ${contenido.asunto}` : ''}`

        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: REMITENTE,
                to: [DESTINO],
                reply_to: contenido.email,
                subject: asuntoCorreo,
                html: plantillaCorreo(seguro),
                text: `${asuntoCorreo}\n\nNombre: ${contenido.nombre}\nLugar del evento: ${contenido.direccion || '-'}\nEmail: ${contenido.email}\nTeléfono: ${contenido.telefono || '-'}\nAsunto: ${contenido.asunto || '-'}\n\nMensaje:\n${contenido.mensaje}`,
            }),
        })

        const data = await res.json().catch(() => ({}))
        if (!res.ok) {
            console.error('Resend rechazó el correo de contacto:', res.status, data)
            return Response.json({ success: false, error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 502 })
        }

        return Response.json({ success: true })
    } catch (error) {
        console.error('Error en /api/contacto:', error)
        return Response.json({ success: false, error: 'Error de conexión. Intenta de nuevo.' }, { status: 500 })
    }
}
