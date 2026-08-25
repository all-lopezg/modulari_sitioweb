/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'sly-slit-election.ngrok-free.dev',
    '192.168.1.123'
  ],
  experimental: {
    // Los redirects de next.config.mjs matchean case-insensitive por defecto
    // (path-to-regexp con sensitive: false). Sin este flag, una regla /GALERIA
    // también matchearía /galeria (la página real) y entraría en loop infinito.
    // Con caseSensitiveRoutes: true cada variante de mayúsculas requiere su
    // regla explícita (sección "Normalización de mayúsculas/acentos" abajo).
    caseSensitiveRoutes: true,
  },
  async redirects() {
    return [
      // Redirige URLs comunes del antiguo sitio Wix a la nueva estructura
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio',
        destination: '/',
        permanent: true,
      },
      // Rutas legacy que Google aún puede tener indexadas (todas 404 hoy).
      // Las de catálogo/compras apuntan a la vitrina real de cotizaciones;
      // el resto al inicio del sitio.
      {
        source: '/sofas',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/sofas/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/catalogo',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/catalogo/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/vitrina',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/vitrina-virtual',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/tienda',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/comprar',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/productos',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/cotiza',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/cotizar',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      // Variantes con sufijos de la era Wix (-1, -2, -copia, .html, subpaths)
      // que Google aún puede tener indexadas.
      {
        source: '/galeria-:suffix',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/galeria.html',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/galeria/:path+',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/contacto-:suffix',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/contacto.html',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/contacto/:path+',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/nosotros-:suffix',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/nosotros.html',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/nosotros/:path+',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/inicio-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/inicio.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sofas-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/catalogo-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/comprar-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/tienda-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/product-page',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/product-page/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/product-page-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      // ============================================================
      // Normalización de mayúsculas/acentos — reemplaza proxy.js
      // (eliminado). El proxy normalizaba cualquier pathname a
      // minúsculas y sin tildes con 308; los redirects estáticos NO
      // consumen edge functions (el proxy corría en cada request:
      // 89.410 invocaciones/mes).
      //
      // Notas de la doc de Next 16 (node_modules/next/dist/docs):
      // - El source matchea contra el pathname ENCODED (percent-encoded)
      //   tal como llega en la request line, por eso los acentos se
      //   escriben codificados: /cat%C3%A1logo (no /catálogo).
      // - permanent: true => 308.
      // - Con experimental.caseSensitiveRoutes: true (arriba) cada
      //   variante de mayúsculas necesita su regla explícita.
      // ============================================================

      // --- Acentos (forma codificada) ---
      // /catálogo → /catalogo → (regla existente) → vitrina
      {
        source: '/cat%C3%A1logo',
        destination: '/catalogo',
        permanent: true,
      },
      {
        source: '/cat%C3%A1logo/:path*',
        destination: '/catalogo/:path*',
        permanent: true,
      },
      // /sofás → /sofas → (regla existente) → vitrina
      {
        source: '/sof%C3%A1s',
        destination: '/sofas',
        permanent: true,
      },
      {
        source: '/sof%C3%A1s/:path*',
        destination: '/sofas/:path*',
        permanent: true,
      },
      // /galería → /galeria (página real)
      {
        source: '/galer%C3%ADa',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/galer%C3%ADa/:path+',
        destination: '/galeria',
        permanent: true,
      },

      // --- Mayúsculas: páginas principales (ALL-CAPS y Title-case) ---
      {
        source: '/GALERIA',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/Galeria',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/CONTACTO',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/Contacto',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/NOSOTROS',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/Nosotros',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/INICIO',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Inicio',
        destination: '/',
        permanent: true,
      },
      {
        source: '/HOME',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/VITRINA',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Vitrina',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/VITRINA-VIRTUAL',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Vitrina-Virtual',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/TIENDA',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Tienda',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/COMPRAR',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Comprar',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/PRODUCTOS',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Productos',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/COTIZA',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Cotiza',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/COTIZAR',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Cotizar',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/CATALOGO',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Catalogo',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/SOFAS',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Sofas',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/PRODUCT-PAGE',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Product-Page',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },

      // --- Mayúsculas: variantes con sufijo/html/subpath ---
      {
        source: '/GALERIA-:suffix',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/GALERIA.html',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/GALERIA/:path+',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/Galeria-:suffix',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/Galeria.html',
        destination: '/galeria',
        permanent: true,
      },
      {
        source: '/CONTACTO-:suffix',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/CONTACTO.html',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/CONTACTO/:path+',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/Contacto-:suffix',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/Contacto.html',
        destination: '/contacto',
        permanent: true,
      },
      {
        source: '/NOSOTROS-:suffix',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/NOSOTROS.html',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/NOSOTROS/:path+',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/Nosotros-:suffix',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/Nosotros.html',
        destination: '/nosotros',
        permanent: true,
      },
      {
        source: '/INICIO-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/INICIO.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Inicio-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Inicio.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/HOME-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/HOME.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home-:suffix',
        destination: '/',
        permanent: true,
      },
      {
        source: '/Home.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/SOFAS-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/SOFAS/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Sofas-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/CATALOGO-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/CATALOGO/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Catalogo-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/COMPRAR-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Comprar-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/TIENDA-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Tienda-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/PRODUCT-PAGE-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/PRODUCT-PAGE/:path*',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
      {
        source: '/Product-Page-:suffix',
        destination: 'https://modulari.ommi.cl/vitrina',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
