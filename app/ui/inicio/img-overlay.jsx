'use client'
import { useEffect } from "react"
import Image from "next/image"

export default function ImageOverlay({ img, isOpen, setIsOpen }) {

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }, [isOpen])

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm p-8">

                        <div className="absolute top-5 lg:top-8 right-5 lg:right-8">
                            <Image
                                src={'/icons/close.png'}
                                alt="close"
                                width={25} height={25}
                                className="invert cursor-pointer hover:opacity-70"
                                onClick={() => setIsOpen(false)}
                            />
                        </div>

                        <div className="flex items-center justify-center h-full w-full">
                            <Image
                                src={img}
                                alt="modulari"
                                width={0} height={0}
                                sizes="50vw"
                                loading="eager"
                                className="h-fit lg:h-full w-full lg:w-fit rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}