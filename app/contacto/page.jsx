import Image from "next/image"
import Link from "next/link"

export default function ContactPage() {
    return (
        <div className="relative mb-5 mt-5 flex flex-col justify-center mx-4 lg:mx-10">

            {/* Imagen */}
            <div className="lg:w-full lg:h-[80vh]">
                <Image
                    src={'/imgs/contacto/contacto.png'}
                    alt="contacto"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-full rounded-lg lg:object-cover"
                    loading="eager"
                />
            </div>

            {/* Form */}
            <div className="bg-white mx-auto xl:ml-15 lg:ml-5 lg:absolute lg:h-fit -translate-y-1/8 lg:translate-y-0 w-[95%] lg:w-fit rounded-lg shadow-[0_0_12px_2px_rgba(0,0,0,0.1)] px-6 py-8 text-center">

                <h2 className="text-4xl lg:text-5xl mb-1">CONTÁCTANOS</h2>
                <p className="text-gray-500 text-lg leading-6">Déjanos un mensaje o escríbenos por WhatsApp</p>

                <form action="" className="w-full mt-5 text-lg flex flex-col gap-y-3">

                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input type="text" id="nombre" placeholder="Nombre" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                        <input type="text" id="direccion" placeholder="Dirección evento" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    </div>

                    <div className="flex flex-col gap-y-3 lg:flex-row lg:gap-x-3">
                        <input type="email" id="email" placeholder="Email" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                        <input type="tel" id="telefono" placeholder="Teléfono" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    </div>

                    <input type="text" id="asunto" placeholder="Asunto" className="bg-[#F3F3F3] w-full p-2 rounded-md" />
                    <textarea id="mensaje" placeholder="Escribe tu mensaje aquí..." className="bg-[#F3F3F3] w-full p-2 rounded-md"></textarea>

                    <div className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-3">
                        <button type="submit" className="w-full bg-celeste hover:bg-blue-500 active:bg-blue-500 rounded-md py-2 text-white">Enviar</button>

                        <Link
                            href={"https://wa.me/56954015773"}
                            className="bg-[#25D366] hover:bg-[#1b8e45] active:bg-[#1b8e45] text-white rounded-md py-2 flex items-center justify-center gap-x-2 w-full"
                        >
                            <Image
                                src={'/icons/wsp.png'}
                                alt="whatsapp"
                                width={0}
                                height={0}
                                sizes="6"
                                className="w-6 invert"
                            />
                            <span>WhatsApp</span>
                        </Link>
                    </div>

                </form>
            </div>

        </div>
    )
}