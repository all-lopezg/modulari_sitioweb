"use client"
import CatalogoCard from "./catalogo-card"
import { catalogo } from "@/app/lib/catalogo"
import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function Catalogo() {

    const carouselRef = useRef(null)
    const cardRef = useRef(null)
    const cardRefs = useRef([])

    {/* Transparenta las cards que no se vean al 100% en el carousel */ }
    const handleCardOpacity = useCallback(() => {

        const carousel = carouselRef.current
        if (!carousel) return

        const cardWidth = cardRef.current.offsetWidth + 20

        cardRefs.current.forEach((card, index) => {
            if (!card) return

            const cardLeft = index * cardWidth
            const cardRight = cardLeft + cardWidth

            const visible = cardLeft >= carousel.scrollLeft && cardRight <= carousel.scrollLeft + carousel.offsetWidth
            card.style.opacity = visible ? '1' : '0.5'
        })
    }, [])

    useEffect(() => {

        handleCardOpacity()
        const observer = new ResizeObserver(handleCardOpacity)

        observer.observe(carouselRef.current)

        return () => observer.disconnect()

    }, [handleCardOpacity])

    {/* Crea una Dot Pagination en base a la cantidad de slides */}
    const [activeSlide, setActiveSlide] = useState(0)
    const [totalSlides, setTotalSlides] = useState(catalogo.length)

    const handleDotPagination = useCallback(() => {

        const carousel = carouselRef.current
        const card = cardRef.current
        if (!carousel || !card) return

        const cardWidth = card.offsetWidth + 20
        const cardsVisible = Math.trunc(carousel.offsetWidth / cardWidth)

        const index = Math.round(carousel.scrollLeft / (cardWidth * cardsVisible))

        setTotalSlides(catalogo.length / cardsVisible)
        setActiveSlide(index)
    }, [])

    useEffect(() => {

        handleDotPagination()
        const observer = new ResizeObserver(handleDotPagination)

        observer.observe(carouselRef.current)
        return () => observer.disconnect()

    }, [handleDotPagination])

    {/* Calcula cuantos px se debe mover el carousel */ }
    const [move, setMove] = useState(0)
    const [paddingInline, setPaddingInline] = useState(20)

    useEffect(() => {

        if (window.innerWidth < 640) return // no se ejecuta en mobiles

        const calculateMove = () => {

            if (!carouselRef.current || !cardRef.current) return

            const carouselWidth = carouselRef.current.offsetWidth
            const cardWidth = cardRef.current.offsetWidth + 20 // gap

            const cardsVisible = Math.trunc(carouselWidth / cardWidth)

            setMove(cardWidth * cardsVisible)
            setPaddingInline((carouselWidth % cardWidth) / 2)
        }

        calculateMove()

        const observer = new ResizeObserver(() => {
            calculateMove()
            carouselRef.current.scrollLeft = 0
        })
        observer.observe(carouselRef.current)

        return () => observer.disconnect()
    }, [])

    {/* Scrollea los px calculados antes en mobiles */ }
    useEffect(() => {

        if (window.innerWidth < 640) return // no se ejecuta en mobiles

        const carousel = carouselRef.current
        if (!carousel) return

        let startX = 0

        // posición horizontal del dedo cuando toca la pantalla por primera vez (en px)
        const onTouchStart = (e) => {
            startX = e.touches[0].clientX
        }

        const onTouchEnd = (e) => {
            // e.changedTouches[0].clientX -> posición horizontal del dedo cuando sale de la pantalla (en px)
            const swipe = startX - e.changedTouches[0].clientX
            // negativo -> izquierda ; positivo -> derecha

            if (Math.abs(swipe) < 30) return // ignora taps accidentales

            carousel.scrollBy({
                left: swipe > 0 ? move : -move,
                behavior: 'smooth'
            })
        }

        carousel.addEventListener('touchstart', onTouchStart) // cuando el dedo toca carousel, se ejecuta la función dada
        carousel.addEventListener('touchend', onTouchEnd) // cuando el dedo se levanta, se ejecuta la función dada

        // Cleanup; se ejecuta al desmontar el componente
        // Evita que el evento siga registrado en memoria
        return () => {
            carousel.removeEventListener('touchstart', onTouchStart)
            carousel.removeEventListener('touchend', onTouchEnd)
        }
    }, [move])

    {/* Avanza los px calculados antes en desktop */ }
    const handleMove = (direction) => {

        if (window.innerWidth < 640) return // no se ejecuta en mobiles

        const carousel = carouselRef.current
        if (!carousel) return

        carousel.scrollBy({
            left: direction === 'right' ? move : -move,
            behavior: 'smooth'
        })
    }

    {/* Ejecuta las dos funciones al mismo tiempo al hacer scroll */}
    const onScroll = () => {
        handleCardOpacity()
        handleDotPagination()
    }

    return (
        <div className="mx-5 pb-3 lg:mx-10 overflow-hidden rounded-lg lg:relative">
            <h2 className="text-center my-10 text-5xl lg:text-6xl">Vitrina virtual</h2>

            {/* Carrusel */}
            <div
                ref={carouselRef}
                onScroll={onScroll}
                style={{ paddingInline: `${paddingInline}px` }}
                className="overflow-x-scroll sm:overflow-x-hidden flex snap-x snap-mandatory scroll-smooth hide-scrollbar gap-x-5"
            >
                {catalogo.map((item, index) => (
                    <div
                        key={index}
                        ref={el => {
                            cardRefs.current[index] = el
                            if (index === 0) cardRef.current = el
                        }}
                        className="flex shrink-0 transition-opacity w-fit snap-center sm:snap-align-none my-3"
                    >
                        <CatalogoCard img={item.src} name={item.name} />
                    </div>
                ))}
            </div>

            <div className="flex justify-center items-center gap-1.5 mt-3">
                {Array.from({ length: Math.ceil(totalSlides) }).map((_, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-300 rounded-full h-2
                            ${activeSlide === index
                                ? 'w-6 rounded bg-celeste'
                                : 'w-2 bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            <div className="hidden sm:flex justify-center mt-5">

                <button
                    type="button"
                    onClick={() => handleMove('left')}
                    className="cursor-pointer hover:text-celeste"
                >
                    <ChevronLeft size={45} />
                </button>

                <button
                    type="button"
                    onClick={() => handleMove('right')}
                    className="cursor-pointer hover:text-celeste"
                >
                    <ChevronRight size={45} />
                </button>
            </div>

        </div>
    );
}