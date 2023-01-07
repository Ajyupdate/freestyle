import React from 'react'
import { Box, Flex, Spacer, Heading, Text, Button } from '@chakra-ui/react'
//import { Image } from '@chakra-ui/react'
import firstColumn from 'public/firstColumn.svg'
import Image from 'next/image'
import smallHome from 'public/smallHome.svg'
export interface iFirstColumn {}

const FirstColumn = (props: iFirstColumn) => {
  return (
    <Box px={16} mt={16}>
        <Flex>
          <Box  maxW='32rem'>
            <Heading >Find real estate that suits you. Buy, sell or rent your properties easily.</Heading>
            <Text fontSize='l' mt={8}>
            
              A great place to buy, sell and rent your properties. RealEstatery is here to find you an apartment you want, in the region you want and style you want without any commissions.
            </Text>

            <Box mt={8}>
              <Image alt='home' src={smallHome}/>
            </Box>

            <Flex gap='4' mt={12} mb={8}>
              <Button size='lg' colorScheme='green' >
                Browse Properties
              </Button >
              
              <Button size='lg' colorScheme='teal' variant='outline'>
                Enquire Now
              </Button>
            </Flex>

            <Box as='hr' color='#03373A'></Box>

            <Box>
              <Flex gap={4}>
                <Box>
                  <Heading as='h5' size={'md'}>
                    19K+
                  </Heading>
                  <Text fontSize='l'>
                    Properties
                  </Text>
                </Box>

                <Box>
                  <Heading as='h5' size={'md'}>
                    40m
                  </Heading>
                  <Text fontSize='l'>
                    Market Value
                  </Text>
                </Box>

                <Box>
                  <Heading as='h5' size={'md'}>
                    1K+
                  </Heading>
                  <Text fontSize='l'>
                    Available Properties
                  </Text>
                </Box>
              </Flex>
            </Box>
            
          </Box>

          <Spacer/>

          <Box>
            
            <Image alt='home' src={firstColumn}/>
            
          </Box>
        </Flex>
    </Box>
  )
}

export default FirstColumn