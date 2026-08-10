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

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div className="fixed inset-0 z-100 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm p-8">

                        <div className="absolute top-5 lg:top-8 right-5 lg:right-8">
                            <CgClose
                                className="cursor-pointer hover:opacity-70 text-white size-10 lg:size-12"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        <div className="flex items-center justify-center w-full h-full">
                            <MotionImage
                                src={img}
                                alt="modulari"
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