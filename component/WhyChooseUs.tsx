import { Box, Card, Center, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import moneys from 'public/moneys.svg'
import homehashTag from 'public/homehashTag.svg'
import securitysafe from 'public/securitysafe.svg'
import presentionchart from 'public/presentionchart.svg'


export interface iWhyChooseUs {}

const WhyChooseUs = () => {
  return (
    <Box px={16} mt='350'>
        
        <Center>
            <Heading>
                Why Choose Us 
            </Heading>
        </Center>
       
       <Center>
        <Text>RealEstatery is committed to helping you reach your satisfaction</Text>
       </Center>

       <Grid templateColumns='repeat(4, 1fr)' gap={6} mt='12'>

          <GridItem w='100%' h='10'>
            <Card>
            <Center mr={4}><Image src={moneys}  alt="money icon"/></Center>
            <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Best Prices</Text></Center>
            <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
            </Card>
          </GridItem>

          <GridItem w='100%' h='10'>
            <Center mr={4}><Image src={presentionchart} alt="money icon"/></Center>
            <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Security</Text></Center>
            <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
          </GridItem>
          
          <GridItem w='100%' h='10'>
            <Center mr={4}><Image src={securitysafe} alt="money icon"/></Center>
            <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Stable Prices</Text></Center>
            <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
            
          </GridItem>

          <GridItem w='100%' h='10'>
            <Center mr={4}><Image src={homehashTag} alt="money icon"/></Center>
            <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Property Insurance</Text></Center>
            <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
            
          </GridItem>
      </Grid>
    </Box>
  )
}

export default WhyChooseUs