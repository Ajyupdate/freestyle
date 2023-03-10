import { Box, Center, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { ComponentState, ReactElement } from 'react';
import { ISingleHouseProps } from "../../../component/types/HouseProps";
import { Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function MainComponentAction({title, location, price, image}: ISingleHouseProps){
    return(
        <Box  
        >

            <Stack 
            p="4" border="1px" borderColor="gray.200"
            _hover={{
                boxShadow: 'lg'
            }}
            >
                <Flex >
                    <Box position="relative" display="inline-block">
                    <Image width={'1000'} src={image} alt={title}/>
                        <Icon
                            as={FaHeart}
                            position="absolute"
                            top="0"
                            right="0"
                            boxSize="6"
                            color="black"
                            backgroundColor="white"
                            borderRadius="full"
                            padding="1"
                        />
                    </Box>
                    {/* <Image width={'1000'} src={image} alt={title}/> */}
                </Flex>
                <Text color='#1CA5AE' fontSize={'2xl'} fontWeight={600}>${price}K</Text>
                <Text fontSize='30' fontWeight={500}>{title}</Text>

                <Flex >
                    <Icon as={FaMapMarkerAlt} color='gray.300' boxSize={6} />
                    <Text fontSize='20' pl={4} fontWeight={500} color={'gray.600'}>{location}</Text>
                </Flex>

                
                
            </Stack>
            <Center color={'#03373A'} >
                <Text 
                    display={{base: 'block', md: 'none'}} 
                    my={4}  fontWeight='bold'>Text Details</Text>
            </Center>
        </Box>
        
    )
}