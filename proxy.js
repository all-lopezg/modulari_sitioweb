import { NextResponse } from 'next/server'

// Normaliza URLs con mayúsculas a minúsculas (308 permanente).
// Google a veces indexa variantes en mayúsculas (/GALERIA, /GALERIA-1, ...)
// que el router de Next.js trata como 404. Las rutas y redirects de
// next.config.mjs sí matchean sin distinguir mayúsculas, así que basta
// con bajar el path a minúsculas y dejar que el router resuelva.
export function proxy(request) {
    const { pathname } = request.nextUrl
    const lower = pathname.toLowerCase()
    if (lower === pathname) return NextResponse.next()

    const url = request.nextUrl.clone()
    url.pathname = lower
    return NextResponse.redirect(url, 308)
}

export const config = {
    matcher: ['/:path*'],
}
