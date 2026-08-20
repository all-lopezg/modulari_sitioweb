import { NextResponse } from 'next/server'

// Normaliza URLs a minúsculas y sin tildes (308 permanente).
// Google indexó variantes con mayúsculas (/GALERIA) y con acentos
// codificados (/cat%C3%A1logo, /sof%C3%A1s — nombres de páginas del
// antiguo sitio Wix) que el router de Next.js trata como 404. Al bajar
// a minúsculas y quitar diacríticos, la URL cae en las reglas de
// next.config.mjs (/catalogo, /sofas, /galeria...) que sí la resuelven.
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

export function proxy(request) {
    const { pathname } = request.nextUrl
    const normalizado = normalizar(pathname)
    if (normalizado === pathname) return NextResponse.next()

    const url = request.nextUrl.clone()
    url.pathname = normalizado
    return NextResponse.redirect(url, 308)
}

export const config = {
    matcher: ['/:path*'],
}
