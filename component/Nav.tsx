import React from 'react'
import { CompanyName } from './CompanyName'
import { Center, Square, Circle, Box, Link, color } from '@chakra-ui/react'

import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

export interface iNav {}

const Nav = (props: iNav) => {
  return (
    <Box px={16} fontSize='16px' fontWeight={400}>

      <Flex h={10} pt={8}>
        <Box>
          {CompanyName}
        </Box>
        <Spacer />

        <Box  textDecoration={'none'}>
          <Flex gap={4}>
          <Box > <Link>Home</Link></Box>
            <Spacer />
            <Box><Link>Rent</Link></Box>
            <Spacer/>
            <Box><Link>Buy</Link></Box>
            <Spacer/>
            <Box><Link>Sell</Link></Box>
          </Flex>
        </Box>

        <Spacer />

        <Box>
          <Flex gap={2}>
            <Box >
              <Select variant='unstyled' size='md' w={10} >
                <option value='option1'>eng</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
             </Box> 
            <Box>
              <Button colorScheme='teal' bg='#03373A'>
                CONTACT
              </Button>
           
            </Box>
            
            
            
          </Flex>
        </Box>
      </Flex>
            
    </Box>
  )
}

export default Nav