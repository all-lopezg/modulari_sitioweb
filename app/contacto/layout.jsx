// Metadata específica de la página Contacto (la página es client component,
// por eso la metadata se exporta desde el layout del segmento).
export const metadata = {
  title: "Contacto y cotización",
  description:
    "Solicita una cotización de arriendo de mobiliario para tu evento en Santiago, Valparaíso u O'Higgins. Cuéntanos el lugar y el tipo de evento.",
  alternates: {
    canonical: "/contacto",
  },
};

export default function ContactoLayout({ children }) {
  return children;
}
