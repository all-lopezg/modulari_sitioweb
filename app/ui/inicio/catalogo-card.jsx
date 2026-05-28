import Image from "next/image"

export default function CatalogoCard({ img, name }) {
    return (
        <div className="grid gap-y-3 w-fit bg-white p-4 rounded-md shadow-[0_0_12px_2px_rgba(0,0,0,0.1)]">
            <Image 
                src={img}
                alt="modulari"
                width={300} height={300}
                className="rounded-md w-74.75 sm:w-75"
            />
            <p className="text-[22px]">{name}</p>
            <button className="text-lg bg-celeste text-white flex items-center ml-auto px-2 py-1.5 rounded-md">Más información</button>
        </div>
    )
}