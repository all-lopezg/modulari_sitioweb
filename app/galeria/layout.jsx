// Metadata específica de la página Galería (la página es client component,
// por eso la metadata se exporta desde el layout del segmento).
export const metadata = {
  title: "Galería de eventos",
  description:
    "Mira cómo Modulari ambienta bodas, celebraciones y eventos corporativos con mobiliario de lujo: mesas, sillas, sillones de ratán y más.",
  alternates: {
    canonical: "/galeria",
  },
};

export default function GaleriaLayout({ children }) {
  return children;
}
