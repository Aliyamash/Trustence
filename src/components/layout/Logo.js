import Image from "next/image";
import logo from '@/public/images/logo3.webp'
export default function Logo(){
    return(
        <div className="overflow-hidden w-[3rem] h-full">
            <Image className= "object-fit rounded-xl scale-[2.25]" priority width="150" height="190" src={logo} alt="trustence-logo"/>
        </div>
    )
}