import { Box, Flex, Grid, Select, Text, useColorModeValue } from "@chakra-ui/react"

export default function Copyright(){

    return(
        <Box>
            {/* <Box as='hr' color='#03373A'></Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <Select variant='unstyled' size='sm' w={20} >
              <option value='option1'>ENG</option>
              <option value='option2'>Option 2</option>  
            </Select>
            </Grid> */}

        <Box py={10}>
        <Flex
          align={'center'}
          borderBottom= '1px solid'
            borderColor= {useColorModeValue('gray.200', 'gray.700')}
            flexGrow = {1}
           mr={8}
        >
          
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © Copyright 2023. RealEstatery. All Right Reserved
        </Text>
      </Box>

            

        </Box>
    )
}