"use client"
import Image from "next/image"
import { motion } from "motion/react";
import { useState } from "react";
import ImageOverlay from "../ui/components/ImgOverlay";

const MotionImage = motion.create(Image)

export default function Galeria() {

    const [isOpen, setIsOpen] = useState(false)
    const [img, setImg] = useState(null)

    const handleOverlay = (src) => {

        setImg(src)
        setIsOpen(true)
    }

    return (
        <div id="galeria" className="mx-5 lg:mx-20">

            <motion.div
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-10"
            >
                <h1 className="text-[3rem] lg:text-[4rem] text-center">Galería de Eventos</h1>

                <p className="text-[1.2rem] lg:text-[1.4rem] text-gray-600 w-[80%] lg:w-[50%] text-center mx-auto -mt-1">Así luce Modulari en cada evento. Espacios pensados para sorprender, con mobiliario que combina estilo y confort en cada detalle.</p>
            </motion.div>

            <div className="xs:columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">

                <MotionImage
                    src="/images/galeria/img1.jpg"
                    alt="Arco con una mesa decorado con flores"
                    width={960}
                    height={1280}
                    className="rounded-md object-[center_70%] cursor-pointer hover:brightness-40 active:brightness-40 aspect-square object-cover"
                    onClick={() => handleOverlay('/images/galeria/img1.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img7.jpg"
                    alt="Mesa con sillas y quitasol"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover object-[center_bottom] cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img7.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img12.jpg"
                    alt="Mesa de bar de madera para eventos"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img12.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img10.jpg"
                    alt="Mesa con sillas y quitasol"
                    width={3024}
                    height={4032}
                    className="rounded-md aspect-square object-cover cursor-pointer hover:brightness-40 active:brightness-40"
                    onClick={() => handleOverlay('/images/galeria/img10.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img3.jpg"
                    alt="Lamparas colgantes exterior"
                    width={3024}
                    height={4032}
                    className="rounded-md cursor-pointer hover:brightness-40 active:brightness-40 aspect-square object-cover"
                    onClick={() => handleOverlay('/images/galeria/img3.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img17.jpg"
                    alt="Mesa de bar y lámparas colgantes en evento"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img17.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img9.jpg"
                    alt="Mesas con sillas y quitasol"
                    width={3024}
                    height={4032}
                    className="rounded-md cursor-pointer hover:brightness-40 active:brightness-40 aspect-square object-cover"
                    onClick={() => handleOverlay('/images/galeria/img9.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img4.jpg"
                    alt="Mesa con sillas, pisos y quitasol"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img4.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img5.jpg"
                    alt="Mesa decorada con flores"
                    width={3024}
                    height={4032}
                    className="rounded-md aspect-square object-cover object-[center_20%] cursor-pointer hover:brightness-40 active:brightness-40"
                    onClick={() => handleOverlay('/images/galeria/img5.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img14.jpg"
                    alt="Mesa y sillas de bar con estufa al exterior"
                    width={3024}
                    height={4032}
                    onClick={() => handleOverlay('/images/galeria/img14.jpg')}
                    className="aspect-square object-[center_75%] object-cover rounded-md cursor-pointer hover:brightness-40 active:brightness-40"
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img15.jpg"
                    alt="Mesas y sillas de bar"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img15.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
                <MotionImage
                    src="/images/galeria/img16.jpg"
                    alt="Mesas y sillas con quitasoles al exterior"
                    width={3024}
                    height={4032}
                    className="rounded-md object-cover cursor-pointer hover:brightness-40 active:brightness-40 aspect-square"
                    onClick={() => handleOverlay('/images/galeria/img16.jpg')}
                    initial={{ opacity: 0, y: -60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                />
            </div>

            <ImageOverlay isOpen={isOpen} setIsOpen={setIsOpen} img={img} />
        </div>
    )
}
