import Link from "next/link";

export default function FAQSection(){
    return(
        <>
        <div className="bg-[#245336] py-44">
            <div className="container">
                <div className="flex flex-col md:flex-row gap-24 justify-between items-center">
                    <div className="text-white">
                        <h2 className="font-bold text-3xl md:text-5xl mb-2">Have a Question?</h2>
                        <p className="text-lg ">This button leads you to the answer you've been looking for.</p>
                    </div>
                    <div>
                        <Link className="bg-[#ffffff42] text-white  px-8 py-6 rounded-2xl text-lg font-bold  hover:shadow-2xl hover:shadow-zinc-950 hover:bg-[#fffffff1] hover:text-black transition duration-500" href={'/faqs'}>
                            Discover Your answer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
