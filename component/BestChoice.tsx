import { Box, Button, Flex, Grid, GridItem, Heading, IconButton, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {  SearchIcon } from '@chakra-ui/icons'

import fourKHouse from 'public/FourKHouse.svg'
import threeKHouse from 'public/threeKHouse.svg'
import sixKHouse from 'public/sixKHouse.png'
import Image from 'next/image'

export interface iBestChoic {}

const BestChoice = () => {
  return (
    <div>
        <Box px={16} mt={8}>
            <Flex >
                <Box py={4}>
                    <Heading fontSize='20px' color='#1CA5AE'>Best Choices</Heading>
                    <Heading fontSize='30px' py={4}>Popular Residencies</Heading>
                </Box>

                <Spacer/>
            
                <Button leftIcon={<SearchIcon />} colorScheme='teal' bg='#03373A' variant='solid'>
                    Search by Location
                </Button>
            </Flex>

            <Grid templateColumns='repeat(3, 1fr)' gap={24}>
                <GridItem w='100%' h='10'>
                    <Image alt='home' src={fourKHouse}/>
                    <Heading as='h6' fontSize='30' color='#1CA5AE'>$4,000k</Heading>
                    <Text fontSize='30'>Primerose Mansion</Text>
                    <Text fontSize='20'>Abuja, Nigeria</Text>
                </GridItem>
                <GridItem w='100%' h='10'>
                    <Image alt='home' src={threeKHouse}/>
                    <Heading as='h6' fontSize='30' color='#1CA5AE'>$3,500k</Heading>
                    <Text fontSize='30'>Oakwood Mansion</Text>
                    <Text fontSize='20'>Abuja, Nigeria</Text>
                </GridItem>
                <GridItem w='100%' h='10'>
                    <Image alt='home' src={sixKHouse}/>
                    <Heading as='h6' fontSize='30' color='#1CA5AE'>$4,000k</Heading>
                    <Text fontSize='30'>Lambo House</Text>
                    <Text fontSize='20'>Abuja, Nigeria</Text>
                </GridItem>
            </Grid>

            
        </Box>
    </div>
  )
}

export default BestChoice