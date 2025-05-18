import { Headset } from "lucide-react";
import Link from "next/link";

export default function BtnDiscover() {
    return(
        <>
            <div className="flex gap-3 hover:shadow-[#658672] hover:text-green-950 bg-[#658672] text-white transition duration-500 hover:shadow-2xl cursor-pointer hover:bg-[#fff8ee] rounded-xl md:px-8 lg:px-10 px-14 py-3">
                <Link href={'/discovery'}>Discover</Link>
                <Headset className="icon-size-btn" />
            </div>
        </>
    )
}