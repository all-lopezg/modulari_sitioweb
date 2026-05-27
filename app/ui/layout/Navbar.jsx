"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { navlinks } from "../../lib/constants";
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <nav className="fixed top-0 left-0 right-0 mx-auto w-[90%] z-2 bg-white flex justify-between items-center px-4 mt-3 md:px-5 py-2 md:py-3 rounded-md shadow-[0_0_8px_1px_rgba(0,0,0,0.15)]">

                {/* Logo */}
                <Image
                    src={'/logo.png'}
                    alt="logo modulari"
                    width={0}
                    height={0}
                    sizes="50vw"
                    className="w-40 md:w-50 md:ml-5 lg:ml-0"
                    loading="eager"
                />

                {/* Menu */}
                <div className="bg-celeste justify-center p-1.5 rounded-sm md:hidden flex">

                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ?
                            <X color="white" size={26} />
                            :
                            <Menu color="white" size={26} />
                        }
                    </button>
                </div>

                {/* Links */}
                <ul className="hidden md:flex text-celeste">

                    {navlinks.map((link) => (
                        <li key={link.label} className="hover:bg-celeste active:bg-celeste hover:text-white active:text-white px-2 py-1 rounded-md">
                            <Link href={link.href}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}