/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    'sly-slit-election.ngrok-free.dev',
    '192.168.1.123'
  ],
  async redirects() {
    return [
      // Redirección desde URLs del antiguo sitio Wix (si existen)
      // Reemplaza "modulari" y "wixsite" por la URL real que usaba Wix
      {
        source: '/(www.)?modulari.wixsite.com/:path*',
        destination: 'https://modulari.cl/:path*?query*',
        permanent: true,
      },
      {
        source: '/(www.)?wix.com/_partials/:path*',
        destination: 'https://modulari.cl/?query*',
        permanent: true,
      },
      // Redirige URLs comunes de Wix a la nueva estructura
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
    ]
  },
};

export default nextConfig;
