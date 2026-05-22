"use client"
import CatalogoCard from "./catalogo-card"
import { catalogo } from "@/app/lib/catalogo"
import { useState, useRef } from "react"

export default function Catalogo() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef(null);

    // Detectar scroll y actualizar bolitas
    const handleScroll = () => {

        const container = carouselRef.current; // div del carousel
        if (!container) return;

        const scrollLeft = container.scrollLeft; // cuantos pixeles se movió
        const itemWidth = container.children[0]?.offsetWidth + 16; // ancho de la card + gap
        const index = Math.round(scrollLeft / itemWidth);

        setCurrentSlide(Math.min(index, catalogo.length - 1));

        console.log(itemWidth, scrollLeft)
    };

    return (
        <div className="bg-[#F6F6F6] grid justify-center py-10 mx-2 rounded-md w-fit overflow-hidden">

            <h2 className="text-center text-5xl mb-8">Revisa nuestra <br className="md:hidden" /> colección</h2>

            <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex gap-x-4 overflow-x-scroll w-full">
                {catalogo.map((mueble, index) => (
                    <div key={index} className="shrink-0">
                        <CatalogoCard
                            img={mueble.src}
                            name={mueble.name}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-4">
                {catalogo.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 rounded-full transition-all ${index === currentSlide
                            ? 'bg-blue-500 w-8'
                            : 'bg-gray-300 w-2'
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}