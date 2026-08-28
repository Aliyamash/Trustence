export default function CardService({ item }){
    return(
        <>
            
                  {item.map((value) => (
                     <div key={value.id} className="transition duration-700 cursor-default  flex flex-col px-5 py-12 gap-4  shadow items-center justify-center text-[#fff8ee] hover:text-black  hover:shadow-[#245336] hover:shadow-2xl bg-[#245336] hover:bg-white w-[18rem] h-[18rem] rounded-2xl">
                       <value.icon className="service-icons my-auto" />
                       <h3 className="text-xl title font-bold text-center tracking-wider">{value.name}</h3>
                       <p className="text-center font-bold text-sm title-service-cards text-pretty">{value.title}</p>
                     </div>
                  ))}
               
        </>
    )
}
