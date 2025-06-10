"use client"

export default function Error({error , reset}){
    return(
        <>
            <div className="py-64 bg-fqa">
                <div className="container">
                        <h1 className="text-2xl text-center text-white">{error.message}</h1>
                        <button className="text-white bg-green-700 shadow-xl hover:shadow-2xl hover:shadow-white rounded-xl " onClick={() => reset()}>Reload</button>
                </div>
            </div>
        </>
    )
}