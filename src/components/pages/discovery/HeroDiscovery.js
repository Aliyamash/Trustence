import { MoveDown } from "lucide-react";
import Link from "next/link";

export default function HeroDiscovery(){
    return(
        <div className="bg-transparent py-64">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl text-white 2xl:text-7xl font-bold mb-8">A precise first conversation for an ambitious digital project.</h1>
                    <p className="text-xl md:text-2xl font-bold md:mx-24 mb-24 text-white">In a complimentary strategy session, we examine the objective, identify the highest-value opportunity, and decide whether Trustence is the right partner for the work.</p>
                    <Link href={'#formDiscover'} className="px-8 py-6 bg-green-900 text-lg md:text-xl text-white rounded-full hover:shadow-2xl hover:shadow-green-800 transition duration-500 hover:bg-white hover:text-black">Request your session <MoveDown className="inline"/></Link>
                </div>
            </div>
        </div>
    )
}
