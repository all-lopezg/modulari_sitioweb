'use client'
import Image from "next/image"
import { useState } from "react"
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function SofasPage() {

    const [category, setCategory] = useState('regular')

    return (
        <div className="grid gap-y-20">

            {/* Banner */}
            <div
                className="flex flex-col md:flex-row md:justify-center mx-5 lg:mx-20 gap-y-4 gap-x-8 mt-10 md:mt-5">
                <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-end flex flex-col justify-center">
                    <h2 className="text-[15vw] leading-[15vw] md:text-[7vw] md:leading-[7vw] lg:text-[6.5vw]">Sofás modulares</h2>
                    <p className="text-[5vw] md:text-[2.6vw] lg:text-[2vw] lg:leading-[2.5vw] text-gray-500">Elige los módulos que te gusten <br /> y nosotros lo armamos para ti</p>
                </motion.div>
                <MotionImage
                    src={'/images/sofas/banner.png'}
                    alt="sofas modulares modulari"
                    width={600} height={285}
                    className="md:w-[50%] h-fit"
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                />
            </div>


            {/* Caracteristicas */}
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-5 lg:gap-x-8 justify-center mx-5 md:mx-10">

                <motion.div
                    initial={{ x: -100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] rounded-lg p-4 lg:p-6 w-fit">
                    <MotionImage
                        src={'/images/sofas/traslado.png'}
                        alt="sofas modulares modulari"
                        width={378} height={284}
                        className="rounded-lg w-full md:h-71 lg:h-[40vh] lg:w-fit"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    />
                    <div className="mt-4 lg:w-[24vw]">
                        <h3 className="font-semibold text-[22px] md:text-2xl lg:text-[1.8vw] mb-1">Fácil traslado y armado</h3>
                        <p className="text-lg md:text-xl leading-6 lg:text-[1.4vw] lg:leading-[1.7vw]">Nuestros sofás modulares se pueden armar y desarmar, así que tu mudanza nunca antes fue tan fácil.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: 100 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    className="shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] rounded-lg p-4 lg:p-6 w-fit">
                    <video
                        src="/images/sofas/versatilidad.mp4"
                        autoPlay loop muted
                        className="rounded-lg object-cover md:h-71 md:w-full lg:h-[40vh] lg:w-fit"
                    />
                    <div className="mt-4 md:w-full lg:w-[32vw]">
                        <h3 className="font-semibold text-[22px] md:text-2xl lg:text-[1.8vw] mb-1">Versatilidad</h3>
                        <p className="text-lg md:text-xl leading-6 lg:text-[1.4vw] lg:leading-[1.7vw]">No importa que te cambies de casa, puedes reorientar tu sofá Modulari y acomodarlo a nuevos espacios.</p>
                    </div>
                </motion.div>

            </div>


            {/* Tamaños */}
            <div className="grid gap-y-4 mx-5 md:mx-10">

                {/* Botones */}
                <div className="flex justify-center text-lg md:text-xl lg:text-[1.3vw] gap-x-5">

                    <button
                        onClick={() => setCategory('regular')}
                        className={`${category === 'regular' ? 'bg-celeste text-white' : 'bg-white text-celeste'} flex flex-col xs:flex-row items-center h-fit justify-center border-2 border-celeste rounded-lg p-3 lg:px-15 flex-1 lg:flex-none cursor-pointer gap-x-1`}
                    >
                        <span>Tamaño regular</span>
                        <span>(70x70)</span>
                    </button>

                    <button
                        onClick={() => setCategory('xl')}
                        className={`${category === 'xl' ? 'bg-celeste text-white' : 'bg-white text-celeste'} flex flex-col xs:flex-row items-center justify-center border-2 border-celeste rounded-lg p-3 lg:px-15 flex-1 lg:flex-none cursor-pointer gap-x-1`}
                    >
                        <span>Tamaño XL</span>
                        <span>(100x70)</span>
                    </button>
                </div>

                {/* Imagenes */}
                <div className={`${category === 'regular' ? '' : 'hidden'} lg:mx-0 flex flex-col items-center gap-y-3`}>

                    <div className="flex lg:flex-row gap-3">
                        <MotionImage
                            src={'/images/sofas/regular/img1.png'}
                            alt="sofas modulares modulari"
                            width={600} height={346}
                            className="rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                        <MotionImage
                            src={'/images/sofas/regular/img2.png'}
                            alt="sofas modulares modulari"
                            width={277} height={346}
                            className="hidden md:block rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-3">
                        <MotionImage
                            src={'/images/sofas/regular/img3.png'}
                            alt="sofas modulares modulari"
                            width={431} height={338}
                            className="w-full md:w-107.75 rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                        <MotionImage
                            src={'/images/sofas/regular/img4.png'}
                            alt="sofas modulares modulari"
                            width={451} height={338}
                            className="rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>
                </div>

                <div className={`${category === 'xl' ? '' : 'hidden'} mx-5 flex flex-col items-center gap-y-3`}>

                    <div className="flex flex-col md:flex-row gap-3">
                        <MotionImage
                            src={'/images/sofas/xl/img1.png'}
                            alt="sofas modulares modulari"
                            width={503} height={377}
                            className="rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                        <MotionImage
                            src={'/images/sofas/xl/img2.png'}
                            alt="sofas modulares modulari"
                            width={377} height={377}
                            className="rounded-lg"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <MotionImage
                        src={'/images/sofas/xl/img3.png'}
                        alt="sofas modulares modulari"
                        width={898} height={447}
                        className="rounded-lg"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    />
                </div>
            </div>


            {/* Form Presupuesto */}
            <div className="flex flex-col lg:flex-row lg:justify-center mx-10 md:mx-15 lg:mx-20 gap-y-7 lg:gap-x-10">

                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center lg:text-end lg:w-[40%]">
                    <h2 className="text-4xl md:text-5xl lg:text-[3vw] mb-1">Obtén un presupuesto gratis</h2>
                    <p className="text-xl md:text-2xl lg:text-[1.5vw] text-gray-500">Cuéntanos lo que buscas y recibe una propuesta personalizada. Sin compromiso</p>
                </motion.div>

                <motion.form
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    action="" className="text-lg lg:text-[1.3vw] w-full lg:w-[40%] grid gap-y-2">

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
                </motion.form>
            </div>
        </div >
    )
}