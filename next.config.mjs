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
    ]
  },
};

export default nextConfig;
