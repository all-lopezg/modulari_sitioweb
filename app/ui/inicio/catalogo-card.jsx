import Image from "next/image"

export default function CatalogoCard({ img, name }) {
    return (
        <div className="w-fit grid gap-y-3 bg-white p-4 rounded-md">
            <Image 
                src={img}
                alt="modulari"
                width={300} height={300}
                className="rounded-md"
            />
            <p className="text-xl">{name}</p>
            <button className="text-xl bg-celeste text-white flex items-center ml-auto p-2 rounded-md">Más información</button>
        </div>
    )
}