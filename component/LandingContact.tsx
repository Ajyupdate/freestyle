import { Box, Button, Container, Flex, Heading, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import contactPic from 'public/contactPic.svg'
import Image from 'next/image'
export interface iLandingPage{}

const LandingContact = (props: iLandingPage) => {
  return (
    <Box mt={24} px={{base:1, md:16}}>
      
        <Box 
           marginTop={{ base: '1', sm: '5' }}
          display="flex"
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent="space-between"
        >
            <Box>
                <Image alt='home' src={contactPic}/>
            </Box>

            <Spacer/>
            
            <Box maxW='45rem'>
                <Text mb={4} fontSize='3xl' color='#1CA5AE'>Contact us</Text>
                <Heading fontSize='40px'  fontWeight='600'>
                Get Started with RealEstatery
                </Heading>
                <Text mt={8} >Is there a problem finding your dream home? Need a guide in buying, selling or renting your first home? 
                    Need a consultation on residential issues? Just contact us. We are readily available 24/7.
                </Text>
                <Button size='lg' bg='#03373A' color='white' mt='40px'>
                    Message Now
                </Button>
            </Box>
           
            
        </Box>
    </Box>
  )
}
export default LandingContact




