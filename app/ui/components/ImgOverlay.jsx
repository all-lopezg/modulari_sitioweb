'use client'
import { useEffect } from "react"
import Image from "next/image"
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "motion/react";

const MotionImage = motion.create(Image)

export default function ImageOverlay({ img, isOpen, setIsOpen }) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    // Cerrar con la tecla Escape (accesibilidad de teclado).
    useEffect(() => {
        if (!isOpen) return
        const onKey = (e) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [isOpen, setIsOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-100 flex items-center justify-center" role="dialog" aria-modal="true" aria-label="Imagen ampliada">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm p-8" onClick={() => setIsOpen(false)}>

                        <button
                            className="absolute top-5 lg:top-8 right-5 lg:right-8 cursor-pointer hover:opacity-70 text-white"
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar imagen"
                        >
                            <CgClose className="size-10 lg:size-12" />
                        </button>

                        <div className="flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
                            <MotionImage
                                src={img}
                                alt="Imagen ampliada de mobiliario Modulari"
                                width={0} height={0}
                                sizes="50vw"
                                loading="eager"
                                className="h-fit w-full md:h-full md:w-fit rounded-lg"
                                key="img-overlay"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}