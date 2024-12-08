/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

export default function SubMenu({title, src}: any) {
    return (
        <div className="flex flex-col p-4 bg-gradient-to-b from-[#FFFFFF] via-[#D3D3D3] to-[#A9A9A9] border-2 border-[#D1DEE5] rounded-lg gap-3">
            <Image src={src} alt={""} width={24} height={24} />
            <p className="font-bold text-base text-black">{title}</p>
        </div>
    )
}