import Link from "next/link";
import Image from "next/image";
import { Frank_Ruhl_Libre } from "next/font/google";

const frank = Frank_Ruhl_Libre({
  subsets: ['latin'],
  weight: '900'
})

export default function Banner() {
    return (
        <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-15 mx-10 lg:mx-25 lg:items-stretch">

            {/* Texto y botones */}
            <div className="flex flex-col gap-y-4 lg:gap-y-0 justify-around lg:flex-1">
                <h1 className={`${frank.className} text-5xl lg:text-7xl`}>Tus eventos con el mejor estilo</h1>
                <p className="text-gray-500 text-lg lg:text-2xl">Explora nuestro amplio catálogo de mobiliarios y crea ambientes únicos para cada ocasión.</p>

                <div className="flex flex-col gap-y-2">
                    <Link
                        href={'/contacto'}
                        className="bg-celeste hover:bg-blue-500 active:bg-blue-500 text-white rounded-md text-lg lg:text-xl py-2 text-center"
                    >
                        Cotiza aquí
                    </Link>
                    <Link
                        href={''}
                        className="border-celeste hover:bg-celeste/30 active:bg-celeste/30 border-2 text-celeste rounded-md text-lg lg:text-xl py-2 text-center"
                    >
                        Revisa nuestro catálogo
                    </Link>
                </div>
            </div>

            {/* Grid de imágenes */}
            <div className="grid gap-y-3 lg:flex-1">

                <div className="aspect-16/8 lg:aspect-auto lg:h-[35vh]">
                    <Image
                        alt="sillas y pisos modulari"
                        src={'/imgs/inicio/img3.jpg'}
                        width={0} height={0}
                        sizes="50vw"
                        className="w-full h-full object-cover object-[25%_70%] rounded-lg"
                    />
                </div>

                <div className="grid grid-cols-2 gap-x-3">
                    <div className="aspect-square lg:aspect-auto lg:h-[30vh]">
                        <Image
                            src={'/imgs/inicio/img16.jpg'}
                            alt="pisos, sillas y quitasoles modulari"
                            width={0} height={0}
                            sizes="25vw"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="aspect-square lg:aspect-auto lg:h-[30vh]">
                        <Image
                            src={'/imgs/inicio/img5.jpg'}
                            alt="mesas y sillas modulari"
                            width={0} height={0}
                            sizes="25vw"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}