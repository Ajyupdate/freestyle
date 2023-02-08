import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export interface iSubscription {}

const Subscription = (iSubscription: iSubscription) => {
  return (
    <Box bg='#03373A' mx={{base:0, md:16}} p={8} color='white' mt={20} >

        
          <Box >
            <Center>
              <Heading  fontSize='36px' textAlign={'center'} fontWeight='600px'>Subscribe to our newsletter</Heading>
            </Center>
          </Box>

          <Box pt={4}>
          <Center >
                <Text fontWeight='400' align={'center'} fontSize='20px'>Subscribe and find super attractive price quotes from us. 
                    find a residence soon.
                </Text>
            </Center>
          </Box>
          
          <Box pt={8}>
            <Center>
            <Button width={{base: 'lg', sm: 'unset'}} colorScheme='white' variant='outline'>
              Get Started
            </Button>
            </Center>
            
          </Box>
            
      
        
    </Box>
  )
}
export default Subscription;