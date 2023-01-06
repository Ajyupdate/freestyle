import React from 'react'
import { CompanyName } from './CompanyName'
import { Center, Square, Circle, Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

import { Flex, Spacer } from '@chakra-ui/react'

export interface iNav {}

const Nav = (props: iNav) => {
  return (
    <Box px={16} fontSize='16px' fontWeight={400}>

      <Flex h={10}>
        <Box>
          {CompanyName}
        </Box>
        <Spacer />

        <Box  >
          <Flex gap={4}>
            <Box   >Home</Box>
            <Spacer />
            <Box   >Rent</Box>
            <Spacer />
            <Box    >Buy</Box>
            <Spacer/>
            <Box >Sell</Box>
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
            {/* <Grid   templateColumns='repeat(3, 1fr)'>

        <GridItem >
          <Link as={NextLink} href='/home'>
            <span className="font-semibold text-xl tracking-tight">{CompanyName}</span>
          </Link>
        </GridItem>

        

        <GridItem >
          <Grid templateColumns={'repeat(3, 1fr)'}>
            <GridItem>
              <Link as={NextLink} href='/home'>
                <span className="font-semibold text-xl tracking-tight">{CompanyName}</span>
              </Link>
            </GridItem>

            <GridItem>
              <Link as={NextLink} href='/home'>
                <span className="font-semibold text-xl tracking-tight">{CompanyName}</span>
              </Link>
            </GridItem>

            <GridItem>
              <Link as={NextLink} href='/home'>
                <span className="font-semibold text-xl tracking-tight">{CompanyName}</span>
              </Link>
            </GridItem>

          </Grid>
        </GridItem>

        <GridItem >
          
            <Grid>
              <GridItem>
                <Select placeholder='Select option' size='xs' >
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </GridItem>
              
           <GridItem>
           <Button colorScheme='teal' >
                Button
              </Button>
           </GridItem>
              
            </Grid>
              
            
            
          
          
        </GridItem>
      </Grid> */}
    
      {/* <nav className="flex items-center justify-between flex-wrap bg-orange-400 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          
          <span className="font-semibold text-xl tracking-tight">{CompanyName}</span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div className="">
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Rent
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Buy
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Sell
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
            Buy
          </a>
          </div>

        <div className="">
          

          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div>
        </div>
    </nav> */}

    



    {/* <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">Tailwind CSS</span>
        </div>

        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        <div className="text-sm lg:flex-grow">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
              Blog
            </a>
          </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          

          <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
          </div>
        </div>
    </nav> */}
    </Box>
  )
}

export default Nav