import Image from "next/image";
import { ComponentState } from "react";


export interface IMoreImageProps{
    source: ComponentState,
    title: string
}

//const imageSrc = [fourKHouse, threeKHouse, sixKHouse]

export default function MoreImages({source}: IMoreImageProps){
    return(
        
        <div>
            <Image src={source} alt='related image'/>
        
        </div>
    )
}


