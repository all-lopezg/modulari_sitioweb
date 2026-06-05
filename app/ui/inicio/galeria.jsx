"use client"
import Image from "next/image";
import ImageOverlay from "./img-overlay";
import { useState } from "react";
import { motion } from "motion/react";

const MotionImage = motion.create(Image)

export default function Galeria() {

    const [isOpen, setIsOpen] = useState(false)
    const [img, setImg] = useState(null)

    const handleOverlay = (src) => {

        setImg(src)
        setIsOpen(true)
    }

    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center gap-y-10">

                <h2 className="text-5xl lg:text-[4vw] text-center">Galeria de fotos</h2>

                <div className="mx-10 lg:mx-20 grid gap-y-2">

                    <div className="grid md:grid-cols-[1510fr_984fr] gap-2">

                        <div className="gap-2 grid sm:grid-cols-[950fr_560fr]">
                            <MotionImage
                                src="/images/inicio/galeria/img1.jpg"
                                alt="modulari"
                                width={950} height={652}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 w-full"
                                onClick={() => handleOverlay("/images/inicio/galeria/img1.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img2.jpg"
                                alt="modulari"
                                width={560} height={652}
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
                                alt="modulari"
                                width={984} height={652}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 w-full"
                                onClick={() => handleOverlay("/images/inicio/galeria/img3.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img4.jpg"
                                alt="modulari"
                                width={776} height={772}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 md:hidden"
                                onClick={() => handleOverlay("/images/inicio/galeria/img4.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>

                    <div className="gap-2 grid sm:grid-cols-[728fr_984fr] md:grid-cols-[776fr_728fr_984fr]">
                        <MotionImage
                            src="/images/inicio/galeria/img4.jpg"
                            alt="modulari"
                            width={776} height={772}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 hidden md:block"
                            onClick={() => handleOverlay("/images/inicio/galeria/img4.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                        <MotionImage
                            src="/images/inicio/galeria/img5.jpg"
                            alt="modulari"
                            width={728} height={772}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/images/inicio/galeria/img5.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />

                        <MotionImage
                            src="/images/inicio/galeria/img6.jpg"
                            alt="modulari"
                            width={984} height={772}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/images/inicio/galeria/img6.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="gap-2 grid sm:grid-cols-[1080fr_972fr]">
                        <MotionImage
                            src="/images/inicio/galeria/img7.jpg"
                            alt="modulari"
                            width={1192} height={802}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 flex-1"
                            onClick={() => handleOverlay("/images/inicio/galeria/img7.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />

                        <MotionImage
                            src="/images/inicio/galeria/img8.jpg"
                            alt="modulari"
                            width={972} height={802}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/images/inicio/galeria/img8.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="grid gap-2 md:grid-cols-[2.2fr_1fr]">

                        <div className="grid sm:grid-cols-[1.32fr_1fr] gap-2">
                            <MotionImage
                                src="/images/inicio/galeria/img9.jpg"
                                alt="modulari"
                                width={732} height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img9.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img10.jpg"
                                alt="modulari"
                                width={1192} height={802}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img10.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        <MotionImage
                            src="/images/inicio/galeria/img11.jpg"
                            alt="modulari"
                            width={972} height={804}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 object-cover aspect-video md:aspect-auto object-[50%_75%]"
                            onClick={() => handleOverlay("/images/inicio/galeria/img11.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />
                    </div>

                    <div className="grid gap-2 md:grid-cols-[3.15fr_1fr]">

                        <div className="grid sm:grid-cols-[0.785fr_1fr] gap-2">
                            <MotionImage
                                src="/images/inicio/galeria/img12.jpg"
                                alt="modulari"
                                width={732} height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img12.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img13.jpg"
                                alt="modulari"
                                width={792} height={806}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img13.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>

                        <div className="grid gap-2 sm:grid-cols-[0.71fr_1fr] md:grid-cols-1">
                            <MotionImage
                                src="/images/inicio/galeria/img14.jpg"
                                alt="modulari"
                                width={1056} height={772}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/images/inicio/galeria/img14.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />

                            <MotionImage
                                src="/images/inicio/galeria/img15.jpg"
                                alt="modulari"
                                width={972} height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 md:hidden"
                                onClick={() => handleOverlay("/images/inicio/galeria/img15.jpg")}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-[1fr_0.82fr] md:grid-cols-[0.98fr_1fr_0.818fr] gap-2">
                        <MotionImage
                            src="/images/inicio/galeria/img15.jpg"
                            alt="modulari"
                            width={972} height={804}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40 hidden md:block"
                            onClick={() => handleOverlay("/images/inicio/galeria/img15.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />

                        <MotionImage
                            src="/images/inicio/galeria/img16.jpg"
                            alt="modulari"
                            width={972} height={804}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/images/inicio/galeria/img16.jpg")}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                        />

                        <MotionImage
                            src="/images/inicio/galeria/img17.jpg"
                            alt="modulari"
                            width={732} height={804}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/images/inicio/galeria/img17.jpg")}
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
    )
}