import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import { ComponentState, ReactElement } from 'react';
import { ISingleHouseProps } from "../../../component/types/HouseProps";
import { Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MainComponentAction({title, location, price, image}: ISingleHouseProps){
    return(
        <Box  p="4" border="1px" borderColor="gray.200"
        _hover={{
            boxShadow: 'lg'
        }}
        >

            <Stack >
                <Flex align={'center'}>
                    <Image src={image} alt={title}/>
                </Flex>
                <Text color='#1CA5AE' fontSize={'2xl'} fontWeight={600}>${price}K</Text>
                <Text fontSize='30' fontWeight={500}>{title}</Text>

                <Flex >
                    <Icon as={FaMapMarkerAlt} color='gray.300' boxSize={6} />
                    <Text fontSize='20' pl={4} fontWeight={500} color={'gray.600'}>{location}</Text>
                </Flex>
                
            </Stack>
        </Box>
        
    )
}