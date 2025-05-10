import { MoveDown } from "lucide-react";
import Link from "next/link";

export default function HeroDiscovery(){
    return(
        <div className="bg-transparent py-64">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl text-white 2xl:text-7xl font-bold capitalize mb-8">A session that illuminates the path to your business growth</h1>
                    <p className="text-xl md:text-2xl font-bold md:mx-24 mb-24">In this free session, we help you clarify your true business goals, identify your challenges, and craft a clear digital roadmap to achieve success.</p>
                    <Link href={'#formDiscover'} className="px-8 py-6 bg-green-900 text-lg md:text-xl text-white capitalize rounded-full hover:shadow-2xl hover:shadow-green-800 transition duration-500 hover:bg-white hover:text-black">free discover call <MoveDown className="inline"/></Link>
                </div>
            </div>
        </div>
    )
}