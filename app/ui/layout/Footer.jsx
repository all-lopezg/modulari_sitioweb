'use client'
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black text-white p-5 md:p-7">

            {/* Logo */}
            <div className="w-full flex justify-center">
                <Image
                    src={"/logo-invertido.png"}
                    alt="logo modulari"
                    width={0}
                    height={0}
                    sizes="60vw"
                    className="w-65 opacity-70 md:w-60 mb-5 md:mb-8"
                />
            </div>

            {/* Links */}
            <ul className="flex flex-col md:flex-row gap-y-2 md:justify-center md:gap-x-10 md:text-base">

                <li className="flex items-center gap-x-2.5">
                    <Image
                        src={"/icons/insta.png"}
                        width={0}
                        height={0}
                        alt="instagram modulari"
                        className="invert w-[5vw] sm:w-[1.5vw] h-auto"
                    />
                    <a
                        href="https://www.instagram.com/modulari.cl/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        modulari.cl
                    </a>
                </li>

                <li className="flex items-center gap-x-2.5">
                    <Image
                        src={"/icons/wsp.png"}
                        width={0}
                        height={0}
                        alt="instagram"
                        className="invert w-[5vw] sm:w-[1.5vw] h-auto"
                    />
                    <a
                        href="https://wa.me/56954015773"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        +56954015773
                    </a>
                </li>

                <li className="flex items-center gap-x-2.5">
                    <Image
                        src={'/icons/email.png'}
                        alt="icono email"
                        width={0}
                        height={0}
                        className="invert w-[5vw] sm:w-[1.5vw] h-auto"
                    />
                    <a
                        href="mailto:contacto@modulari.cl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        contacto@modulari.cl
                    </a>
                </li>

                <li className="flex items-center gap-x-2.5">
                    <Image
                        src={'/icons/web.png'}
                        alt="web"
                        width={0}
                        height={0}
                        className="invert w-[5vw] sm:w-[1.5vw] h-auto"
                    />
                    <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.modulari.cl
                    </a>
                </li>
            </ul>
        </footer>
    )
}