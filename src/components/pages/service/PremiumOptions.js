import { premiumServices } from "@/components/OptionsServices";


export default function PremiumOptions(){
    return(
        <div className="flex flex-col gap-2 items-start mt-8">

            {premiumServices.map((value) =>(
                <div key={value.id} className="gap-5 my-1">
                        <div className="flex w-full items-center gap-2 mb-2">
                        <value.icon className="icon-btn-size"/>
                        <h1 className="text-lg font-bold ">{value.title}:</h1>
                        </div>
                        <p className="text-zinc-800 self-start ml-5">{value.description}</p>
                </div>
            ))}
        </div>
    )
}


