"use client"
import Image from "next/image"
import Link from "next/link";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Vitrina() {
    return (
        <div className="mx-5 lg:mx-20">

            <div className="lg:flex lg:gap-x-2">

                <motion.div
                    className="grid gap-y-3 mb-5 lg:mb-0 lg:flex lg:flex-col lg:flex-1 lg:justify-center bg-celeste/30 rounded-md px-10 py-5"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-[2.8rem] lg:text-[4vw] text-center lg:text-start">Catálogo</h2>

                    <p className="text-[1.2rem] lg:text-[1.4rem] text-center lg:text-start">Contamos con una amplia variedad de estilos para ambientar cualquier celebración, donde cada pieza combina diseño y funcionalidad. Todo elaborado con materiales de primera calidad, pensados para lucir impecables en cada ocasión.</p>

                    <Link href={''} className="text-[1.2rem] lg:text-[1.4rem] bg-celeste hover:bg-blue-500 active:bg-blue-500 text-white flex h-fit py-2 font-bold lg:mx-0 rounded-md justify-center lg:self-start lg:px-5 lg:mt-5">
                        Revisa nuestro catálogo
                    </Link>
                </motion.div>

                <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-2 lg:flex-1">
                    <MotionImage
                        src="/images/inicio/catalogo/silla_raun.png"
                        width={333} height={333}
                        alt="Sitial Barro Modulari"
                        className="rounded-md w-full h-32 xs:h-40 md:h-60 lg:h-48 object-cover object-[center_70%]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    />
                    <MotionImage
                        src="/images/inicio/catalogo/sofa_anati.png"
                        width={333} height={333}
                        alt="Sofá Anati Modulari"
                        className="rounded-md w-full h-full object-cover row-span-2 object-[center_70%]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    />
                    <MotionImage
                        src="/images/inicio/catalogo/mesa_bar_bali.png"
                        width={725} height={525}
                        alt="Mesa Bar Bali Modulari"
                        className="rounded-md w-full h-full object-cover row-span-2 object-[center_90%]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                    />
                    <MotionImage
                        src="/images/inicio/catalogo/mesa_niagara.png"
                        width={725} height={525}
                        alt="Mesa Niagara"
                        className="rounded-md w-full h-24 xs:h-40 lg:h-32 object-cover object-[center_100%]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}
                    />
                </div>
            </div>
        </div>
    )
}