import { ISingleHouseProps } from "../../../component/types/HouseProps"
import fourKHouse from 'public/FourKHouse.svg'
import MainComponentAction from "./MainComponent"
import { SimpleGrid } from "@chakra-ui/react"
export default function MainGrid(){
    const mainComponentData: ISingleHouseProps[] = [
        {
            title: 'Primerose Mansion',
            location: 'Abuja, Nigeia',
            price: 4000,
            image: fourKHouse

        },
        {
            title: 'Primerose Mansion',
            location: 'Abuja, Nigeia',
            price: 4000,
            image: fourKHouse

        },{
            title: 'Primerose Mansion',
            location: 'Abuja, Nigeia',
            price: 4000,
            image: fourKHouse

        }
    ]

    return(
        <div>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {mainComponentData.map((action, index) =>(
                <MainComponentAction key={action.title + index} {...action}/> 
                ))}
            </SimpleGrid>
        </div>
    )
}