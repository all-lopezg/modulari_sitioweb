"use client"
import { IoIosArrowBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Fabs() {

    return (
        <>
            <button
                className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-celeste text-white text-[0.7rem] font-semibold uppercase shadow-lg flex items-center justify-center transition hover:bg-celeste/80 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <IoIosArrowBack className="size-10 rotate-90" />
            </button>

            <Link
                href={"https://wa.me/56954015773?text=Hola%20Modulari%2C%20me%20gustaría%20tener%20más%20información"}
                className="fixed bottom-24 right-6 z-50 h-14 w-14 rounded-full bg-[#25d366] text-white shadow-lg flex items-center justify-center transition hover:bg-[#25d366]/90"
                aria-label="WhatsApp"
            >
                <FaWhatsapp className="size-9" />
            </Link>
        </>
    )
}