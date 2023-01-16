import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export interface iSubscription {}

const Subscription = (iSubscription: iSubscription) => {
  return (
    <Box bg='#03373A' mx={16} color='white' mt={20}>

        
          <Box pt={8}>
            <Center>
              <Heading  fontSize='36px' fontWeight='600px'>Subscribe to our newsletter</Heading>
            </Center>
          </Box>

          <Box pt={4}>
          <Center >
                <Text fontWeight='400' fontSize='20px'>Subscribe and find super attractive price quotes from us. 
                    find a residence soon.
                </Text>
            </Center>
          </Box>
          
          <Box pt={8}>
            <Center>
            <Button colorScheme='white' variant='outline'>
              Get Started
            </Button>
            </Center>
            
          </Box>
            
      
        
    </Box>
  )
}
export default Subscription;