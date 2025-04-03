import Image from "next/image";

export default function Logo(){
    return(
        <div>
            <Image className= "object-fit rounded-xl" priority width="50" height="90" src="/images/trustence-logo.jpg" alt="trustence-logo"/>
        </div>
    )
}