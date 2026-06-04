import { Merriweather } from "next/font/google"
import Image from "next/image"

const merriweather = Merriweather({
    subsets: ['latin'],
    weight: '800',
    style: 'italic'
})

export default function AboutPage() {
    return (
        <div className="flex flex-col justify-center items-center lg:items-stretch md:flex-row mx-5 lg:mx-20 gap-y-3 gap-x-4">

            <div className="bg-celeste text-white rounded-lg text-center gap-y-4 lg:gap-y-10 py-8 px-8 xs:px-8 lg:px-10 md:h-[60vh] lg:h-[80vh] md:w-[50%] flex flex-col justify-center">
                <h2 className="text-5xl xs:text-6xl lg:text-[5.5vw]">Nosotros</h2>
                <p className={`${merriweather.className} text-xl xs:text-2xl lg:text-[2.2vw]`}>Somos 2 hermanos apasionados por el diseño y la arquitectura.</p>
                <p className="text-lg xs:text-xl lg:text-[1.6vw]">Así nace Modulari: una marca de mobiliario de lujo especializada en sofás modulares y arriendo de piezas exclusivas para eventos con identidad y estilo.</p>
            </div>

            <div className="overflow-hidden rounded-lg w-full md:w-[50%] md:h-[60vh] lg:h-[80vh]">
                <Image
                    src={'/images/nosotros/nosotros.png'}
                    alt="modulari"
                    width={920} height={1160}
                    className="aspect-square xs:aspect-video md:aspect-auto object-[50%_35%] object-cover w-full h-full scale-130 lg:scale-100"
                />
            </div>

        </div>
    )
}