import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export const metadata = {
  title: "Página no encontrada",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="mx-5 lg:mx-20 my-10 flex flex-col items-center text-center gap-y-6">
      <div>
        <h1 className="text-[6rem] lg:text-[8rem] leading-none text-celeste">404</h1>
        <p className="text-[1.8rem] lg:text-[2.2rem] font-semibold mt-2">
          Página no encontrada
        </p>
        <p className="text-gray-500 text-lg lg:text-xl mt-3 max-w-xl mx-auto leading-7">
          La página que buscas ya no existe o cambió de lugar. Explora nuestro
          sitio o contáctanos directamente y te ayudamos con tu evento.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-y-3 gap-x-3 w-full sm:w-auto">
        <Link
          href={"/"}
          className="bg-celeste hover:bg-blue-500 active:bg-blue-500 text-white rounded-md py-2.5 px-8 text-lg flex-1 sm:flex-none"
        >
          Volver al inicio
        </Link>
        <Link
          href={"/galeria"}
          className="border-2 border-celeste text-celeste hover:bg-celeste hover:text-white rounded-md py-2.5 px-8 text-lg flex-1 sm:flex-none"
        >
          Ver galería
        </Link>
        <Link
          href={"https://modulari.ommi.cl/vitrina"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black hover:bg-gray-800 text-white rounded-md py-2.5 px-8 text-lg flex-1 sm:flex-none"
        >
          Ir al catálogo
        </Link>
      </div>

      <Link
        href={"https://wa.me/56954015773?text=Hola%20Modulari%2C%20encontré%20una%20página%20que%20no%20funciona%20y%20quiero%20información"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-x-2 text-gray-600 hover:text-celeste text-lg"
      >
        <FaWhatsapp className="text-[#25d366] size-6" />
        ¿Dudas? Escríbenos por WhatsApp
      </Link>
    </div>
  );
}
