import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Nav from "./Nav"
export interface ILandingPageLayout{
    children: React.ReactNode
    
}
export default function Layout({ children }: ILandingPageLayout) {
  return (
    <>
      <Nav /> 
      <Flex  direction={{md: "column", base: 'column'}} align={'center'} >
        <Heading 
        mt={6}
        fontWeight={'extrabold'}
        fontSize={{base: '20', md:'40'}}
        // fontSize={{base: '50', md:'unset'}}
        alignContent={{base:'center'}} whiteSpace="nowrap">Find Your Dream Home With Us.</Heading>
        <Text fontWeight={4} my={2}>Welcome to our community.</Text>
      </Flex >
      <main>{children}</main>
      
    </>
  )
}