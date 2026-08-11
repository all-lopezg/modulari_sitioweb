"use client"
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Banner() {

    return (
        <div className="grid mx-5 md:mx-10 lg:mx-20 md:mt-5 lg:mt-0 gap-y-5 scroll-mt-24 lg:scroll-mt-32" id="inicio">

            {/* Texto y botones */}
            <motion.div
                initial={{ opacity: 0.5, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-y-2 md:gap-y-4 lg:flex-row lg:gap-x-5">

                <h1 className="uppercase whitespace-nowrap text-center text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[4vw] leading-12 sm:leading-20 md:leading-[8.5vw] lg:leading-normal">
                    Tu evento con estilo
                </h1>

                <div className="gap-y-3 flex flex-col flex-1">

                    <p className="text-gray-500 text-center lg:whitespace-nowrap lg:text-start text-[1.4rem] lg:text-[1.5vw] lg:leading-[3vh] xl:leading-[4vh]">
                        Explora nuestro catálogo de mobiliarios y crea ambientes únicos para cada ocasión.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-y-2 gap-x-5 text-[1.4rem] lg:text-[1.3vw] lg:leading-5 xl:leading-8">
                        <Link
                            href={'https://modulari.ommi.cl/vitrina'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-celeste hover:bg-blue-800 active:bg-blue-800 border-2 text-white rounded-md text-center flex-1 py-2 flex items-center justify-center"
                        >
                            Cotiza aquí
                        </Link>
                        <p className="text-center text-[1.3rem] my-auto">o desde nuestro catálogo</p>
                    </div>
                </div>
            </motion.div>

            {/* Imagen + Cuadro con texto */}
            <div className="relative">
                <MotionImage
                    src={'/images/galeria/img6.jpg'}
                    alt="Sillón blanco, sillas y banqueta de ratán, mesa de madera rustica y alfombra yute cuadrada en exterior"
                    width={3024} height={4032}
                    loading="eager"
                    className={`rounded-lg aspect-square lg:aspect-video object-cover lg:w-full lg:h-[75vh] lg:object-[center_65%]`}
                    initial={{ opacity: 0.5, x: -120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                />

                <motion.div
                    initial={{ opacity: 0.5, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" bg-celeste/80 rounded-lg w-[90%] mx-auto -translate-y-1/4 sm:-translate-y-1/3 lg:w-[50%] lg:translate-x-[45%] lg:translate-y-[-110%]"
                >
                    <p className="text-white text-[1rem] lg:text-[1.5vw] p-4 lg:p-6">
                        Con nuestra colección de mobiliario de lujo, transformaremos cualquier evento en una experiencia única. Tenemos las piezas perfectas para ambientar tu ocasión.
                    </p>
                </motion.div>
            </div>
        </div>
    )
}