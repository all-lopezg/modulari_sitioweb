import Banner from "./ui/inicio/banner";
import Eventos from "./ui/inicio/eventos";
import Contacto from "./contacto/page";
import Vitrina from "./ui/inicio/vitrina";

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
