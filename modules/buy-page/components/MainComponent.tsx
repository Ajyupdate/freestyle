import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { ComponentState, ReactElement } from 'react';
import { ISingleHouseProps } from "../../../component/types/HouseProps";


export default function MainComponentAction({title, location, price, image}: ISingleHouseProps){
    return(
        <Box bg="gray.100" p="4" boxShadow="md">

        {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            {/* Column 1 */}


          {/* </SimpleGrid>  */}
            <Stack align={{base: 'center',  }}>
                <Flex>
                    <Image src={image} alt={title}/>
                </Flex>
                <Text color='#1CA5AE' fontSize={'2xl'} fontWeight={600}>${price}K</Text>
                <Text fontSize='30' fontWeight={500}>{title}</Text>
                <Text fontSize='20' fontWeight={500} color={'gray.600'}>{location}</Text>
            </Stack>
        </Box>
        
    )
}