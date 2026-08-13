"use client"
import Image from "next/image";
import Link from "next/link";
import ImageOverlay from "../components/ImgOverlay";
import { useState } from "react";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Eventos() {

    const [isOpen, setIsOpen] = useState(false)
    const [img, setImg] = useState(null)

    const handleOverlay = (src) => {

        setImg(src)
        setIsOpen(true)
    }

    return (
        <>
            <div className="relative -mt-5 lg:-mt-20">
                <div className="flex flex-col justify-center items-center gap-y-5 lg:gap-y-10">

                    <h2 className="text-[2.8rem] leading-12 mx-4 lg:text-[4vw] text-center">así se verán tus eventos</h2>

                    <div className="mx-5 lg:mx-20 grid gap-y-2">

                        <div className="grid md:grid-cols-[1510fr_984fr] gap-2">

                            <div className="gap-2 grid sm:grid-cols-[950fr_560fr]">
                                <MotionImage
                                    src="/images/inicio/galeria/img1.jpg"
                                    alt="Sillón blanco, sillas de ratán, banqueta de ratán, mesa de madera rústica y quitasol blanco en exterior"
                                    width={950} height={652}
                                    loading="eager"
                                    className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                    onClick={() => handleOverlay("/images/inicio/galeria/img1.jpg")}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                />

                                <MotionImage
                                    src="/images/inicio/galeria/img2.jpg"
                                    alt="Mesas de bar y taburetes de ratán en exterior"
                                    width={560} height={652}
                                    loading="eager"
                                    className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 w-full"
                                    onClick={() => handleOverlay("/images/inicio/galeria/img2.jpg")}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>

                            <div className="grid sm:grid-cols-[984fr_655fr] md:grid-cols-1 gap-2">
                                <MotionImage
                                    src="/images/inicio/galeria/img3.jpg"
                                    alt="Sillas de ratán, sillón de ratán, pisos de madera, poufs de ratán, mesa de ratán y alfombra blanca en exterior"
                                    width={984} height={652}
                                    loading="eager"
                                    className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 w-full"
                                    onClick={() => handleOverlay("/images/inicio/galeria/img3.jpg")}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                />

                                <MotionImage
                                    src="/images/inicio/galeria/img4.jpg"
                                    alt="Sillas y sillones de ratán, mesas y banquetas de madera, y alfombra yute en exterior"
                                    width={776} height={772}
                                    loading="eager"
                                    className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 hidden sm:block  md:hidden"
                                    onClick={() => handleOverlay("/images/inicio/galeria/img4.jpg")}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        </div>

                        <div className="gap-2 hidden sm:grid sm:grid-cols-[728fr_984fr] md:grid-cols-[776fr_728fr_984fr]">
                            <MotionImage
                                src="/images/inicio/galeria/img4.jpg"
                                alt="Sillas y sillones de ratán, mesas y banquetas de madera, y alfombra yute en exterior"
                                width={776} height={772}
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 hidden md:block"
                                onClick={() => handleOverlay("/images/inicio/galeria/img4.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                            <MotionImage
                                src="/images/inicio/galeria/img5.jpg"
                                alt="Mesa y sillas de madera en exterior"
                                width={728} height={772}
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img5.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img6.jpg"
                                alt="Mesa de bar de madera y taburetes blancos en exterior"
                                width={984} height={772}
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img6.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        <div className="gap-2 hidden md:grid md:grid-cols-[1080fr_972fr]">
                            <MotionImage
                                src="/images/inicio/galeria/img7.jpg"
                                alt="Mesa de bar y taburetes de ratán con barra de bar de madera en exterior"
                                width={1192} height={802}
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 flex-1"
                                onClick={() => handleOverlay("/images/inicio/galeria/img7.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img8.jpg"
                                width={972} height={802}
                                alt="Mobiliario de lujo Modulari ambientando un evento"
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img8.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                            <MotionImage
                                src="/images/galeria/img11.jpg"
                                alt="Mesas y sillas de Modulari ambientando un evento"
                                width={3024}
                                height={4032}
                                loading="eager"
                                onClick={() => handleOverlay('/images/galeria/img11.jpg')}
                                className="rounded-md aspect-video object-cover object-[center_75%] cursor-pointer hover:brightness-40 active:brightness-40"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                            <MotionImage
                                src="/images/galeria/img13.jpg"
                                alt="Mobiliario Modulari decorando una celebración"
                                width={3024}
                                height={4032}
                                loading="eager"
                                className="rounded-md aspect-video object-cover cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay('/images/galeria/img13.jpg')}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>
                </div>

                <ImageOverlay isOpen={isOpen} setIsOpen={setIsOpen} img={img} />
            </div>

            <motion.div
                className="text-white text-center mx-5 lg:mx-20 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <Image
                    src={'/images/galeria/img2.jpg'}
                    alt="Ratán y sofás blancos en jardín Modulari"
                    width={3314} height={3024}
                    className="h-[30vh] lg:h-[45vh] object-cover rounded-md object-[center_65%]"
                />
                <div className="absolute inset-0 bg-black/50 z-0 rounded-md" />

                <motion.div
                    className="absolute inset-0 z-1 flex flex-col items-center justify-center"
                >
                    <h3 className="text-[3rem] lg:text-[4.5rem]">GALERIA</h3>
                    <Link href={'/galeria'} className="text-[1.2rem] lg:text-[1.5rem] bg-celeste py-2 w-[60%] lg:w-[30%] mx-auto block rounded-md hover:bg-blue-500 active:bg-blue-500">Ver más</Link>
                </motion.div>
            </motion.div>
        </>
    )
}