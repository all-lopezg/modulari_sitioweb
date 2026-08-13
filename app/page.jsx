import Banner from "./ui/inicio/banner";
import Eventos from "./ui/inicio/eventos";
import Contacto from "./contacto/page";
import Vitrina from "./ui/inicio/vitrina";

export const metadata = {
  title: "Arriendo de mobiliario para eventos | Modulari",
  description:
    "Arriendo de mobiliario de lujo para bodas, celebraciones y eventos corporativos en Santiago, Valparaíso y O'Higgins. Explora el catálogo y cotiza en línea.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
    return (
        <div className="grid gap-y-10">
            <Banner />
            <Eventos />
            <Vitrina />
            <Contacto />
        </div>
    );
}
