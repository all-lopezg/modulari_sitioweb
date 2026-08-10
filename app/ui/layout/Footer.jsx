'use client'
import Image from "next/image"
import Link from "next/link"
import { navlinks } from "../../lib/constants";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

export default function Footer() {
    return (
        <footer className="bg-black text-white p-5 md:p-7 mt-15 text-lg lg:px-20">

            <div className="flex flex-col lg:flex-row lg:justify-around">
                {/* Logo */}
                <div className="w-full flex justify-center lg:justify-start">
                    <Image
                        src={"/images/logo-invertido.png"}
                        alt="logo modulari"
                        width={10606}
                        height={1891}
                        sizes="60vw"
                        className="h-fit w-75 md:w-90 lg:w-[45%]"
                    />
                </div>

                <div className="flex flex-col xs:flex-row w-full xs:justify-around lg:justify-between mt-10 xs:mt-5 mb-5 lg:m-0 gap-y-5">
                    {/* Links Navbar */}
                    <div>
                        <ul className="">
                            {navlinks.map(link => (
                                <li key={link.label}>
                                    <Link href={link.href} className="capitalize hover:underline">{link.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links Redes Sociales */}
                    <div>
                        <ul className="flex flex-col gap-y-2 md:justify-center md:gap-x-10">

                            <li>
                                <Link href={"https://www.instagram.com/modulari.cl/"} className="flex items-center gap-x-2.5">
                                    <FaInstagram className="text-white bg-celeste rounded-full p-1 w-[7vw] xs:size-7 lg:size-8 h-auto" />
                                    <span>@modulari.cl</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={"https://wa.me/56954015773"} className="flex items-center gap-x-2.5">
                                    <FaWhatsapp className="text-white bg-celeste rounded-full p-1 w-[7vw] xs:size-7 lg:size-8 h-auto" />
                                    <span>+56954015773</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={"mailto:contacto@modulari.cl"} className="flex items-center gap-x-2.5">
                                    <MdEmail className="text-white bg-celeste rounded-full p-1 w-[7vw] xs:size-7 lg:size-8 h-auto" />
                                    <span>contacto@modulari.cl</span>
                                </Link>
                            </li>

                            <li>
                                <Link href={"/#inicio"} className="flex items-center gap-x-2.5">
                                    <TbWorld className="text-white bg-celeste rounded-full p-1 w-[7vw] xs:size-7 lg:size-8 h-auto" />
                                    <span>www.modulari.cl</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <p className="text-neutral-400 text-center lg:text-start">Diseñado por OMMI Software</p>
        </footer>
    )
}