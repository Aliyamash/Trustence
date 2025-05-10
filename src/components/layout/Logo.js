import Image from "next/image";
import logo from '@/public/images/trustence-logo.jpg'
export default function Logo(){
    return(
        <div>
            <Image className= "object-fit rounded-xl" priority width="50" height="90" src={logo} alt="trustence-logo"/>
        </div>
    )
}