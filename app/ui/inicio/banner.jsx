import Link from "next/link";
import Image from "next/image";

export default function Banner() {
    return (
        <div className="grid mx-5 md:mx-10 lg:mx-20 h-[calc(100vh - 62.61px)] md:mt-5 lg:mt-3 gap-y-5 lg:mb-15">

            {/* Texto y botones */}
            <div className="flex flex-col gap-y-2 md:gap-y-4 lg:flex-row lg:gap-x-10">

                <h1 className="uppercase text-[16vw] leading-[8vh] lg:leading-normal text-center md:text-[8.5vw] lg:text-[5vw] flex items-center justify-center">
                    Tus eventos con <br className="md:hidden" /> el mejor estilo
                </h1>

                <div className="gap-y-3 flex flex-col flex-1">

                    <p className="text-gray-500 text-center lg:text-start text-[1.4rem] lg:text-[1.5vw] lg:leading-[4.5vh]">
                        Explora nuestro amplio catálogo de mobiliarios y crea ambientes únicos para cada ocasión.
                    </p>

                    <div className="flex flex-col md:flex-row gap-y-2 gap-x-5 text-[1.4rem] lg:text-[1.3vw] lg:leading-8">
                        <Link
                            href={'/contacto'}
                            className="bg-celeste hover:bg-blue-500 active:bg-blue-500 text-white rounded-md text-center flex-1 py-1 flex items-center justify-center"
                        >
                            Cotiza aquí
                        </Link>
                        <Link
                            href={''}
                            className="border-celeste hover:bg-celeste/30 active:bg-celeste/30 border-2 text-celeste rounded-md text-center flex-1 py-1 lg:py-1.5 flex items-center justify-center"
                        >
                            Revisa nuestro catálogo
                        </Link>
                    </div>
                </div>
            </div>

            {/* Imagen + Cuadro con texto */}
            <div className="relative">
                <Image
                    src={'/images/inicio/banner.png'}
                    alt="modulari"
                    width={1901} height={503}
                    loading="eager"
                    className="rounded-lg object-cover object-[55%] lg:object-left aspect-square md:aspect-16/6 lg:h-[65vh]"
                />

                <div className="w-[90%] mx-auto lg:w-[50%] h-fit lg:bottom-[-4vh] lg:right-[-2%] -translate-y-1/3 md:-translate-y-1/2 lg:translate-y-0 bg-celeste lg:absolute rounded-lg">
                    <p className="text-white text-[1.3rem] lg:text-2xl p-5 lg:p-8">
                        Descubre nuestra colección de mobiliario de lujo, diseñada para transformar cualquier evento en una experiencia única. Desde íntimas reuniones hasta grandes celebraciones, tenemos las piezas perfectas para ambientar tu ocasión.
                    </p>
                </div>
            </div>
        </div>
    )
}