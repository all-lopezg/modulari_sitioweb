// Endpoint del formulario de contacto.
// Envía el mensaje a contacto@modulari.cl a través de FormSubmit (gratuito, sin cuenta).
// El correo destino se puede cambiar con la variable de entorno CONTACT_EMAIL.
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? 'contacto@modulari.cl'
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export async function POST(request) {
    let body
    try {
        body = await request.json()
    } catch {
        return Response.json({ error: 'Datos inválidos.' }, { status: 400 })
    }

    const nombre = String(body.nombre ?? '').trim().slice(0, 100)
    const direccion = String(body.direccion ?? '').trim().slice(0, 200)
    const email = String(body.email ?? '').trim().slice(0, 150)
    const telefono = String(body.telefono ?? '').trim().slice(0, 30)
    const asunto = String(body.asunto ?? '').trim().slice(0, 200)
    const mensaje = String(body.mensaje ?? '').trim().slice(0, 5000)

    if (!nombre || !email || !mensaje) {
        return Response.json({ error: 'Completa nombre, email y mensaje.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return Response.json({ error: 'El email no es válido.' }, { status: 400 })
    }

    try {
        // FormSubmit exige un Referer de página web; se reenvía el del navegador.
        const referer = request.headers.get('referer') || request.headers.get('origin') || 'https://modulari.cl'

        const res = await fetch(FORMSUBMIT_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Referer': referer,
            },
            body: JSON.stringify({
                nombre,
                direccion,
                email,
                telefono,
                asunto,
                mensaje,
                _subject: `Nuevo mensaje de contacto${asunto ? `: ${asunto}` : ''}`,
                _replyto: email,
                _captcha: 'false',
                _template: 'table',
            }),
        })

        if (!res.ok) {
            const text = await res.text().catch(() => '')
            console.error('FormSubmit error:', res.status, text)
            return Response.json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 502 })
        }

        const data = await res.json().catch(() => ({}))
        const enviado = data?.success === 'true' || data?.success === true
        // Mientras el formulario no esté activado, FormSubmit acepta el envío
        // y responde que falta activación; el mensaje se entrega tras activar.
        const requiereActivacion = typeof data?.message === 'string' && /needs Activation/i.test(data.message)
        if (!enviado && !requiereActivacion) {
            console.error('FormSubmit rechazó el envío:', data)
            return Response.json({ error: 'No se pudo enviar el mensaje. Intenta de nuevo.' }, { status: 502 })
        }

        return Response.json({ ok: true })
    } catch (err) {
        console.error('Error enviando el formulario de contacto:', err)
        return Response.json({ error: 'Error de conexión al enviar. Intenta de nuevo.' }, { status: 502 })
    }
}
