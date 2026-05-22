import { Merriweather } from "next/font/google"
import Image from "next/image"

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '800',
    style: 'italic'
})

export default function AboutPage() {
    return (
        <div className="flex mb-5 lg:mx-20 lg:gap-x-4">

            <div className="bg-celeste text-white rounded-lg w-[50%] text-center grid py-15 px-10">
                <h2 className="text-5xl lg:text-6xl">Nosotros</h2>
                <p className={`${merriweather.className} lg:text-[25px]`}>Somos 2 hermanos apasionados por el diseño y la arquitectura.</p>
                <p className="lg:text-[22px]">Así nace Modulari: una marca de mobiliario de lujo especializada en sofás modulares y arriendo de piezas exclusivas para eventos con identidad y estilo.</p>
            </div>

            <Image
                src={'/imgs/nosotros/nosotros.png'}
                alt="modulari"
                width={920} height={1160}
                className="aspect-square object-cover w-[50%] h-[75vh] rounded-lg"
            />

        </div>
    )
}