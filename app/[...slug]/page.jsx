import { permanentRedirect } from 'next/navigation'
import { notFound } from 'next/navigation'

// Reemplaza la normalización genérica que hacía proxy.js (eliminado):
// URLs legacy con mayúsculas o acentos que Google aún tiene indexadas
// (/GALERIA, /cat%C3%A1logo...) y que no cubren los redirects estáticos.
// Corre en runtime Node.js (por defecto en Server Components), NO es una
// edge function, así que no consume del contador de edge functions.
//
// Por qué existe: la plataforma matchea los redirects de next.config.mjs
// case-insensitive, así que una regla /GALERIA → /galeria también
// matchearía /galeria (la página real) y entraría en loop infinito.
// Este catch-all corre DESPUÉS de los redirects estáticos y sí distingue
// mayúsculas/minúsculas, así que normaliza solo las variantes legacy.
//
// Precedencia: las páginas reales (app/galeria, app/contacto, ...) y
// app/api/contacto ganan sobre este catch-all; los redirects de
// next.config.mjs se aplican antes que el router.
//
// Por qué page.jsx y no route.js: notFound() en un route handler devuelve
// un 404 con body vacío (verificado en el source de Next 16,
// app-route/module.js: new Response(null, { status: 404 })), mientras que
// en una página renderiza app/not-found.jsx con el UI personalizado.
// permanentRedirect() en una página devuelve 308 (Permanent).
const normalizar = (pathname) => {
    let decodificado
    try {
        decodificado = decodeURIComponent(pathname)
    } catch {
        decodificado = pathname // '%' suelto u otro encoding inválido
    }
    return decodificado
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // quita tildes, diéresis, ñ→n
        .toLowerCase()
}

export default async function Page({ params }) {
    const { slug } = await params
    const pathname = '/' + slug.join('/')
    const normalizado = normalizar(pathname)
    if (normalizado === pathname) notFound() // renderiza app/not-found.jsx (404)
    permanentRedirect(normalizado) // 308
}
