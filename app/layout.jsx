import { gothic, bebas } from "./ui/fonts";
import "./globals.css";
import Navbar from "./ui/layout/Navbar";
import Footer from "./ui/layout/Footer";
import Fabs from "./ui/components/Fabs";
import GoogleAnalytics from "@/app/lib/GoogleAnalytics";

export const metadata = {
  title: {
    default: "Modulari | Muebles modulares para oficinas",
    template: `%s | Modulari`,
  },
  description:
    "Modulari diseña muebles modulares y versátiles para oficinas y espacios corporativos. Consulta nuestro catálogo y transforma tu espacio.",
  keywords: [
    "muebles",
    "oficina",
    "modulares",
    "mobiliario",
    "mobiliario de oficina",
    "Chile",
    "modular",
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
    title: "Modulari | Muebles modulares para oficinas",
    description:
      "Diseños versátiles y adaptables a tu espacio. Muebles modulares para oficinas.",
    url: "https://modulari.cl",
    siteName: "Modulari",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Logo Modulari",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modulari | Muebles modulares para oficinas",
    description:
      "Diseños versátiles y adaptables a tu espacio. Muebles modulares para oficinas.",
    creator: "@modulari.cl",
    images: ["/images/logo.png"],
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

export default function RootLayout({ children }) {

  return (
    <html className={`${bebas.variable} ${gothic.variable}`}>
      <body className="mt-25 sm:text-lg">

        <Navbar />
        {children}
        <Footer />

        <Fabs />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
