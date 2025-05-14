export default function MoreQuestion(){
    return(
        <div className="pb-24">
            <div className="container">
                <div className="my-12 text-center">
                    <h1 className="text-2xl font-bold">More Question ? <span className="block my-2 text-green-500">Contact Us..</span></h1>
                </div>
            <div>
                <form action="">
                   <div className="flex flex-col gap-5">
                     <div className="flex flex-col md:flex-row items-start gap-5">
                        <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="name" type="text" placeholder="Full Name" />
                        </div>

                         <div className="w-full ">
                            <input className="bg-zinc-200 p-8 w-full rounded-3xl" name="email" type="email" placeholder="Email Address" />
                        </div>
                    </div>
                    <div >
                        <textarea className="bg-zinc-200 p-8 w-full rounded-3xl" name="message" id="message" placeholder="Your Message" rows={8}></textarea>
                    </div>
                   </div>
                   <div className="my-2 text-center p-6 font-bold text-lg text-white rounded-3xl bg-green-700">
                    <button type="submit">Send Message</button>
                   </div>
                </form>
            </div>
            </div>
        </div>
    )
}