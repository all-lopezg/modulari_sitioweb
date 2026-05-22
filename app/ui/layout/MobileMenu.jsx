"use client"
import Image from "next/image"
import Link from "next/link"
import { navlinks } from "../../lib/constants"

const sociallinks = [
    { href: 'https://instagram.com/modulari.cl', src: 'insta.png', alt: 'instagram' },
    { href: 'https://wa.me/56954015773', src: 'wsp.png', alt: 'whatsapp' },
    { href: 'mailto:contacto@modulari.cl', src: 'email.png', alt: 'email' },
]

export default function MobileMenu({ isOpen, setIsOpen }) {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-celeste flex flex-col z-1">

            {/* Links */}
            <ul className="flex flex-col items-center justify-center flex-1 gap-0 w-full">

                {navlinks.map((link) => (
                    <li key={link.label} className="w-full">
                        <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex justify-center items-center py-5 text-white font-bold text-2xl tracking-widest"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Redes sociales */}
            <div className="flex justify-center gap-6 pb-10">
                {sociallinks.map((link) => (
                    <Link key={link.alt} href={link.href}>
                        <Image
                            src={`/icons/${link.src}`}
                            alt={link.alt}
                            width={0}
                            height={0}
                            sizes="8vw"
                            className="w-10 invert"
                        />
                    </Link>
                ))}
            </div>

        </div>
    )
}