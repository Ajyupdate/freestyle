import { Box, Button, Center, Container, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export interface iSubscription {}

const Subscription = (iSubscription: iSubscription) => {
  return (
    
    

    <Box border="2px"  borderWidth="6px" borderColor="green.100"  mx={{ md:'5%'}}  color='white' mt={20} >

      <Box  bg='#03373A' p={12}>
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
            <Button
            border="2px" p={8} borderWidth="5px" borderColor="green.100" 
            rounded={'none'}
            width={{base: 'lg', sm: 'unset'}}
             colorScheme='white' variant='outline'>
              Get Started
            </Button>
            </Center>
            
          </Box>
          </Box>      
      
        
    </Box>
  )
}
export default Subscription;