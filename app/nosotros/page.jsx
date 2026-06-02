import { Merriweather } from "next/font/google"
import Image from "next/image"

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '800',
    style: 'italic'
})

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-center items-center lg:items-stretch lg:flex-row mb-5 mx-5 lg:mx-20 gap-y-3 gap-x-4">

            <div className="bg-celeste text-white rounded-lg lg:w-[50%] text-center grid gap-y-4 lg:gap-y-0 py-8 lg:py-15 px-8 lg:px-10">
                <h2 className="text-5xl lg:text-[5.5rem]">Nosotros</h2>
                <p className={`${merriweather.className} text-xl lg:text-[2.5rem]`}>Somos 2 hermanos apasionados por el diseño y la arquitectura.</p>
                <p className="text-lg lg:text-[2rem]">Así nace Modulari: una marca de mobiliario de lujo especializada en sofás modulares y arriendo de piezas exclusivas para eventos con identidad y estilo.</p>
            </div>

            <div className="overflow-hidden rounded-lg lg:w-[50%] lg:h-[75vh]">
                <Image
                    src={'/images/nosotros/nosotros.png'}
                    alt="modulari"
                    width={920} height={1160}
                    className="aspect-square object-cover w-full h-full scale-130 lg:scale-100"
                />
            </div>

        </div>
    )
}