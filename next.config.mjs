/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'sly-slit-election.ngrok-free.dev',
    '192.168.1.123'
  ],
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
        destination: '/',
        permanent: true,
      },
      {
        source: '/sofas/:path*',
        destination: '/',
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
        destination: '/',
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
    ]
  },
};

export default nextConfig;
