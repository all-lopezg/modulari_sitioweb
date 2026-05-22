import Banner from "./ui/inicio/banner";
import Galeria from "./ui/inicio/galeria";
import ContactPage from "./contacto/page";
import Catalogo from "./ui/inicio/catologo";

export default function Home() {
    return (
        <div className="grid gap-y-20">
            <Banner />
            <Galeria />
            <Catalogo />
            <ContactPage />
        </div>
    );
}
