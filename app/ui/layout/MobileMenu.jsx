import Link from "next/link"
import { navlinks } from "../../lib/constants"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MobileMenu({ isOpen, setIsOpen }) {

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-celeste flex flex-col z-2">

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
                <Link href={'https://instagram.com/modulari.cl'}>
                    <FaInstagram className="text-white size-10" />
                </Link>
                <Link href={'https://wa.me/56954015773'}>
                    <FaWhatsapp className="text-white size-10" />
                </Link>
                <Link href={'mailto:contacto@modulari.cl'}>
                    <MdEmail className="text-white size-10" />
                </Link>
            </div>

        </div>
    )
}