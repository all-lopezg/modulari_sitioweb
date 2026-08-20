import { gothic, bebas } from "./ui/fonts";
import "./globals.css";
import Navbar from "./ui/layout/Navbar";
import Footer from "./ui/layout/Footer";
import Fabs from "./ui/components/Fabs";
import GoogleAnalytics from "@/app/lib/GoogleAnalytics";

export const metadata = {
  title: {
    default: "Modulari | Arriendo de mobiliario para eventos",
    template: `%s | Modulari`,
  },
  description:
    "Arriendo de mobiliario de lujo para eventos en Santiago, Valparaíso y O'Higgins. Mesas, sillas, sillones y muebles de ratán para bodas, celebraciones y eventos corporativos. Cotiza en línea.",
  keywords: [
    "arriendo de mobiliario para eventos",
    "arriendo de muebles para eventos",
    "mobiliario para eventos",
    "mesas y sillas para eventos",
    "arriendo de mobiliario para bodas",
    "mobiliario de lujo para eventos",
    "arriendo de mobiliario Santiago",
    "arriendo de mobiliario Valparaíso",
    "mobiliario para eventos corporativos",
    "mobiliario de ratán",
    "Modulari",
    "Chile",
  ],
  authors: [{ name: "Modulari" }],
  creator: "Modulari",
  publisher: "Modulari",
  formatDetection: {
    email: "contacto@modulari.cl",
    telephone: "+56954015773",
  },
  metadataBase: new URL("https://modulari.cl"),
  openGraph: {
    title: "Modulari | Arriendo de mobiliario para eventos",
    description:
      "Mobiliario de lujo para bodas, celebraciones y eventos corporativos en Santiago, Valparaíso y O'Higgins.",
    url: "https://modulari.cl",
    siteName: "Modulari",
    images: [
      {
        url: "/images/logo.png",
        alt: "Logo Modulari",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulari | Arriendo de mobiliario para eventos",
    description:
      "Mobiliario de lujo para bodas, celebraciones y eventos corporativos en Santiago, Valparaíso y O'Higgins.",
    creator: "@modulari.cl",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Datos estructurados (schema.org) para que Google entienda qué es Modulari,
// dónde opera y qué servicio ofrece — clave para el SEO local.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://modulari.cl",
  name: "Modulari",
  description:
    "Arriendo de mobiliario de lujo para eventos en Santiago, Valparaíso y O'Higgins.",
  url: "https://modulari.cl",
  telephone: "+56954015773",
  email: "contacto@modulari.cl",
  image: "https://modulari.cl/images/logo.png",
  priceRange: "$$",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Región Metropolitana de Santiago" },
    { "@type": "AdministrativeArea", name: "Región de Valparaíso" },
    { "@type": "AdministrativeArea", name: "Región del Libertador General Bernardo O'Higgins" },
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Arriendo de mobiliario para eventos",
    },
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="es" className={`${bebas.variable} ${gothic.variable}`}>
      <body className="mt-25 sm:text-lg">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />

        <Fabs />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
