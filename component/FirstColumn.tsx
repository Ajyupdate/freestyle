import React from 'react'
import { Box, Flex, Spacer, Heading, Text, Button, Center } from '@chakra-ui/react'
//import { Image } from '@chakra-ui/react'
import firstColumn from 'public/firstColumn.svg'
import Image from 'next/image'
import smallHome from 'public/smallHome.svg'
export interface iFirstColumn {}

const FirstColumn = (props: iFirstColumn) => {
  return (
    <Box px={16} mt={16}>
        <Flex>
          <Box  maxW='45rem'>
            <Heading >Find <Text as ="span" color='#1CA5AE'>real estate</Text> that suits you. 
              <Text as='span' color='#1CA5AE'>Buy, sell</Text> or <Text as='span' color='#1CA5AE'>rent</Text> your properties easily.
            </Heading>
            <Text fontSize='l' mt={8}>
            
              A great place to buy, sell and rent your properties. RealEstatery is here to find you an apartment you want, in the region you want and style you want without any commissions.
            </Text>

            
            <Flex gap='4' mt={12} mb={8}>
              <Button size='lg' colorScheme='green' >
                Browse Properties
              </Button >
              
              <Button size='lg' colorScheme='teal' variant='outline'>
                Enquire Now
              </Button>
            </Flex>

            

            
          </Box>

          <Spacer/>

          <Box>
            
            <Center>
              <Image alt='home' src={smallHome}/>
            </Center>
           
            
          </Box>
        </Flex>

        <Box as='hr' color='#03373A'></Box>

        <Center>
        <Flex gap={4} my={8}>
          
          <Box>
            <Heading as='h5' size={'md'}>
              <Center>
              19K+
              </Center>
             
            </Heading>
            <Text fontSize='l'>
              Properties
            </Text>
          </Box>

          <Box>
            <Heading as='h5' size={'md'}>
              <Center>
                40m
              </Center>  
            </Heading>
            <Text fontSize='l'>
              Market Value
            </Text>
          </Box>

          <Box>

            
          <Heading as='h5' size={'md'}>
          <Center>
            1K+
            </Center>
          </Heading>
            
          
          <Text fontSize='l'>
            Available Properties
          </Text>
          </Box>
        </Flex>
        </Center>
    </Box>
  )
}

export default FirstColumn