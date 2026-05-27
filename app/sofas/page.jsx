'use client'
import Image from "next/image"
import { useState } from "react"

export default function SofasPage() {

    const [category, setCategory] = useState('regular')

    return (
        <div className="grid gap-y-20">

            {/* Banner */}
            <div className="flex flex-col lg:flex-row justify-center mx-5 lg:mx-20 gap-y-4 gap-x-8 mt-10">
                <div className="text-center lg:text-end">
                    <h2 className="text-5xl lg:text-7xl">Sofás modulares</h2>
                    <p className="text-xl lg:text-3xl text-gray-500">Elige los módulos que te gusten <br /> y nosotros lo armamos para ti</p>
                </div>
                <Image
                    src={'/imgs/sofas/banner.png'}
                    alt="sofas modulares modulari"
                    width={600} height={285}
                />
            </div>


            {/* Caracteristicas */}
            <div className="flex flex-col lg:flex-row gap-y-4 gap-x-8 justify-center">

                <div className="shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] rounded-lg p-4">
                    <Image
                        src={'/imgs/sofas/traslado.png'}
                        alt="sofas modulares modulari"
                        width={378} height={284}
                        className="rounded-lg h-71"
                    />
                    <div className="mt-4 w-94.5">
                        <h3 className="font-semibold text-[22px] lg:text-2xl mb-1">Fácil traslado y armado</h3>
                        <p className="text-lg lg:text-xl leading-6">Nuestros sofás modulares se pueden armar y desarmar, así que tu mudanza nunca antes fue tan fácil.</p>
                    </div>
                </div>

                <div className="shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] rounded-lg p-4">
                    <video
                        src="/imgs/sofas/versatilidad.mp4"
                        autoPlay loop muted
                        className="rounded-lg h-71"
                    />
                    <div className="mt-4 w-120">
                        <h3 className="font-semibold text-[22px] lg:text-2xl mb-1">Versatilidad</h3>
                        <p className="text-lg lg:text-xl leading-6">No importa que te cambies de casa, puedes reorientar tu sofá Modulari y acomodarlo a nuevos espacios.</p>
                    </div>
                </div>

            </div>


            {/* Tamaños */}
            <div className="grid gap-y-4">

                {/* Botones */}
                <div className="flex justify-center text-xl mx-5 gap-x-5">

                    <button
                        onClick={() => setCategory('regular')}
                        className={`${category === 'regular' ? 'bg-celeste text-white' : 'bg-white text-celeste'} flex flex-col lg:flex-row h-fit justify-center border-2 border-celeste rounded-lg p-3 lg:px-15 flex-1 lg:flex-none cursor-pointer`}
                    >
                        <span>Tamaño regular</span>
                        <span>(70x70)</span>
                    </button>

                    <button
                        onClick={() => setCategory('xl')}
                        className={`${category === 'xl' ? 'bg-celeste text-white' : 'bg-white text-celeste'} flex flex-col lg:flex-row justify-center border-2 border-celeste rounded-lg p-3 lg:px-15 flex-1 lg:flex-none cursor-pointer`}
                    >
                        <span>Tamaño XL</span>
                        <span>(100x70)</span>
                    </button>
                </div>

                {/* Imagenes */}
                <div className={`${category === 'regular' ? '' : 'hidden'} mx-5 lg:mx-0 flex flex-col items-center gap-y-3`}>

                    <div className="lg:flex lg:gap-x-3">
                        <Image
                            src={'/imgs/sofas/regular/img1.png'}
                            alt="sofas modulares modulari"
                            width={600} height={346}
                            className="rounded-lg"
                        />
                        <Image
                            src={'/imgs/sofas/regular/img2.png'}
                            alt="sofas modulares modulari"
                            width={277} height={346}
                            className="hidden lg:block rounded-lg"
                        />
                    </div>

                    <div className="lg:flex lg:gap-x-3">
                        <Image
                            src={'/imgs/sofas/regular/img3.png'}
                            alt="sofas modulares modulari"
                            width={431} height={338}
                            className="w-full lg:w-107.75 rounded-lg"
                        />
                        <Image
                            src={'/imgs/sofas/regular/img4.png'}
                            alt="sofas modulares modulari"
                            width={451} height={338}
                            className="rounded-lg"
                        />
                    </div>
                </div>

                <div className={`${category === 'xl' ? '' : 'hidden'} mx-5 flex flex-col items-center gap-y-3`}>

                    <div className="lg:flex lg:gap-x-3">
                        <Image
                            src={'/imgs/sofas/xl/img1.png'}
                            alt="sofas modulares modulari"
                            width={503} height={377}
                            className="rounded-lg"
                        />
                        <Image
                            src={'/imgs/sofas/xl/img2.png'}
                            alt="sofas modulares modulari"
                            width={377} height={377}
                            className="rounded-lg"
                        />
                    </div>

                    <Image
                        src={'/imgs/sofas/xl/img3.png'}
                        alt="sofas modulares modulari"
                        width={898} height={447}
                        className="rounded-lg"
                    />
                </div>
            </div>


            {/* Form Presupuesto */}
            <div className="flex flex-col lg:flex-row lg:justify-center lg:mx-20 gap-y-7 lg:gap-x-10">

                <div className="text-center lg:text-end lg:w-[40%]">
                    <h2 className="text-4xl lg:text-5xl mb-1">Obtén un presupuesto gratis</h2>
                    <p className="text-xl lg:text-2xl text-gray-500">Cuéntanos lo que buscas y recibe una propuesta personalizada. Sin compromiso</p>
                </div>

                <form action="" className="text-lg lg:text-xl w-full lg:w-[40%] grid gap-y-2">

                    <input type="text" id="name" placeholder="Nombre"
                        className="w-full bg-[#F3F3F3] p-2 rounded-lg" />

                    <input type="email" id="email" placeholder="Email"
                        className="w-full bg-[#F3F3F3] p-2 rounded-lg" />

                    <textarea id="message" placeholder="Mensaje"
                        className="w-full bg-[#F3F3F3] p-2 rounded-lg h-25"></textarea>

                    <button
                        type="submit"
                        className="bg-celeste text-white w-full py-2 rounded-md"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}