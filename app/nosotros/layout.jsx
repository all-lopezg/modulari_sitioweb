// Metadata específica de la página Nosotros (la página es client component,
// por eso la metadata se exporta desde el layout del segmento).
export const metadata = {
  title: "Nosotros",
  description:
    "Modulari es una empresa chilena de arriendo de mobiliario de lujo para eventos, creada por dos hermanos apasionados por el diseño y la arquitectura.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosLayout({ children }) {
  return children;
}
