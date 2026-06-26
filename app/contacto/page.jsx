"use client"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react";
import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="relative mt-5 flex flex-col justify-center mx-4 lg:mx-10 z-1">

            <Image
                src={'/images/contacto/contacto.png'}
                alt="contacto"
                width={1225}
                height={825}
                className="w-full h-full rounded-lg lg:object-cover lg:aspect-video xl:aspect-16/7 2xl:aspect-16/6"
                loading="eager"
            />

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white mx-auto -mt-20 md:-mt-50 lg:mt-0 xl:ml-15 lg:ml-5 lg:absolute lg:h-fit w-[95%] lg:w-fit rounded-lg shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] px-6 py-8 text-center"
            >

                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-1">CONTÁCTANOS</h2>
                <p className="text-gray-500 text-lg lg:text-[1.6rem] my-3 leading-6">Déjanos un mensaje o escríbenos por WhatsApp</p>

                <form action="" className="w-full mt-5 text-lg lg:text-2xl flex flex-col gap-y-3">

                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input type="text" id="nombre" placeholder="Nombre" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                        <input type="text" id="direccion" placeholder="Dirección evento" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input type="email" id="email" placeholder="Email" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                        <input type="tel" id="telefono" placeholder="Teléfono" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    </div>

                    <input type="text" id="asunto" placeholder="Asunto" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    <textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="bg-[#F3F3F3] w-full p-2 rounded-md h-[15vh]"></textarea>

                    <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-3">
                        <button type="submit" className="w-full bg-celeste hover:bg-blue-500 active:bg-blue-500 rounded-md py-2 text-white">Enviar</button>

                        <Link
                            href={"https://wa.me/56954015773"}
                            className="bg-[#25D366] hover:bg-[#1b8e45] active:bg-[#1b8e45] text-white rounded-md py-2 flex items-center justify-center gap-x-2 w-full"
                        >
                            <FaWhatsapp className="text-white w-[5vw] md:w-[2vw] h-auto" />
                            <span>WhatsApp</span>
                        </Link>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

