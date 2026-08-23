"use client"

export default function Error({error , reset}){
    return(
        <>
            <div className="py-64 bg-fqa">
                <div className="container">
                        <h1 className="text-2xl text-center text-white">Something went wrong. Please try again.</h1>
                        <button className="mt-6 rounded-xl bg-green-700 px-6 py-3 text-white shadow-xl hover:shadow-2xl" onClick={() => reset()}>Try again</button>
                </div>
            </div>
        </>
    )
}
