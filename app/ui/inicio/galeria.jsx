"use client"
import Image from "next/image";
import ImageOverlay from "./img-overlay";
import { useState } from "react";

export default function Galeria() {

    const [isOpen, setIsOpen] = useState(false)
    const [img, setImg] = useState(null)

    const handleOverlay = (src) => {

        setImg(src)
        setIsOpen(true)
    }

    return (
        <div className="relative">
            <div className="flex flex-col justify-center items-center">

                <h2 className="text-5xl lg:text-6xl text-center">Galeria de fotos</h2>
                <p className="text-gray-500 text-xl lg:text-2xl mb-5">Así de impactantes lucirán tus eventos</p>

                <div className="mx-4 lg:mx-20 grid gap-y-2">
                    <div className="grid justify-center gap-2 lg:grid-cols-[1fr_0.65fr]">

                        <div className="grid grid-cols-[1.5fr_0.885fr] gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img1.jpg"
                                alt="modulari"
                                width={950}
                                height={652}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img1.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/galeria/img2.jpg"
                                alt="modulari"
                                width={560}
                                height={652}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img2.jpg")}
                            />
                        </div>

                        <Image
                            src="/imgs/inicio/galeria/img3.jpg"
                            alt="modulari"
                            width={984}
                            height={652}
                            loading="eager"
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img3.jpg")}
                        />
                    </div>

                    <div className="grid justify-center gap-2 lg:grid-cols-[1fr_0.84fr]">

                        <div className="grid grid-cols-[1.17fr_1.1fr] gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img4.jpg"
                                alt="modulari"
                                width={776}
                                height={772}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img4.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/galeria/img5.jpg"
                                alt="modulari"
                                width={728}
                                height={772}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img5.jpg")}
                            />
                        </div>

                        <Image
                            src="/imgs/inicio/galeria/img6.jpg"
                            alt="modulari"
                            width={984}
                            height={652}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img6.jpg")}
                        />
                    </div>

                    <div className="grid justify-center gap-2 lg:grid-cols-[0.7fr_1fr]">

                        <Image
                            src="/imgs/inicio/galeria/img7.jpg"
                            alt="modulari"
                            width={1192}
                            height={802}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img7.jpg")}
                        />

                        <div className="grid grid-cols-[1.33fr_1fr] gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img8.jpg"
                                alt="modulari"
                                width={972}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img8.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/galeria/img9.jpg"
                                alt="modulari"
                                width={732}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img9.jpg")}
                            />
                        </div>
                    </div>

                    <div className="grid justify-center gap-2 lg:grid-cols-[0.67fr_1fr]">

                        <Image
                            src="/imgs/inicio/galeria/img10.jpg"
                            alt="modulari"
                            width={1192}
                            height={802}
                            className="rounded-lg hidden lg:block cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img10.jpg")}
                        />

                        <div className="grid grid-cols-[1fr_1.41fr] gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img11.jpg"
                                alt="modulari"
                                width={972}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img11.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/galeria/img12.jpg"
                                alt="modulari"
                                width={732}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img12.jpg")}
                            />
                        </div>
                    </div>

                    <div className="grid justify-center gap-2 lg:grid-cols-[1.3fr_1fr]">

                        <Image
                            src="/imgs/inicio/galeria/img13.jpg"
                            alt="modulari"
                            width={792}
                            height={806}
                            className="rounded-lg aspect-video object-cover object-[25%_75%] cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img13.jpg")}
                        />

                        <Image
                            src="/imgs/inicio/galeria/img14.jpg"
                            alt="modulari"
                            width={1056}
                            height={772}
                            className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                            onClick={() => handleOverlay("/imgs/inicio/galeria/img14.jpg")}
                        />
                    </div>

                    <div className="grid justify-center gap-2 lg:grid-cols-[0.56fr_1fr]">

                        <div className="grid grid-cols-[1fr_1.15fr] lg:grid-cols-1 gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img16.jpg"
                                alt="modulari"
                                width={972}
                                height={804}
                                loading="eager"
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img16.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/img10.jpg"
                                alt="modulari"
                                width={732}
                                height={804}
                                className="rounded-lg lg:hidden cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img10.jpg")}
                            />
                        </div>

                        <div className="grid grid-cols-[1.17fr_1fr] gap-2">
                            <Image
                                src="/imgs/inicio/galeria/img15.jpg"
                                alt="modulari"
                                width={972}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img15.jpg")}
                            />

                            <Image
                                src="/imgs/inicio/galeria/img17.jpg"
                                alt="modulari"
                                width={732}
                                height={804}
                                className="rounded-lg cursor-pointer hover:brightness-40 active:brightness-40"
                                onClick={() => handleOverlay("/imgs/inicio/galeria/img17.jpg")}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <ImageOverlay isOpen={isOpen} setIsOpen={setIsOpen} img={img} />
        </div>
    )
}