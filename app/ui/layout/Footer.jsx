'use client'
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-5 md:p-7 mt-15">

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

                <li>
                    <Link href={"https://www.instagram.com/modulari.cl/"} className="flex items-center gap-x-2.5">
                        <FaInstagram className="text-white w-[5vw] sm:w-[1.5vw] h-auto" />
                        <span>@modulari.cl</span>
                    </Link>
                </li>

                <li>
                    <Link href={"https://wa.me/56954015773"} className="flex items-center gap-x-2.5">
                        <FaWhatsapp className="text-white w-[5vw] sm:w-[1.5vw] h-auto" />
                        <span>+56954015773</span>
                    </Link>
                </li>

                <li>
                    <Link href={"mailto:contacto@modulari.cl"} className="flex items-center gap-x-2.5">
                        <MdEmail className="text-white w-[5vw] sm:w-[1.5vw] h-auto" />
                        <span>contacto@modulari.cl</span>
                    </Link>
                </li>

                <li>
                    <Link href={"/"} className="flex items-center gap-x-2.5">
                        <TbWorld className="text-white w-[5vw] sm:w-[1.5vw] h-auto" />
                        <span>www.modulari.cl</span>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}