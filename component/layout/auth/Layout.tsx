import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Nav from "./Nav"
export interface ILandingPageLayout{
    children: React.ReactNode
    
}
export default function Layout({ children }: ILandingPageLayout) {
  return (
    <>
      <Nav /> 
      <Flex mx={{base: 8}} direction={{md: "column", base: 'column'}} align={'center'} mt={12}>
        <Heading alignContent={{base:'center'}}>Find Your Dream Home With Us.</Heading>
        <Text>Welcome to our community.</Text>
      </Flex >
      <main>{children}</main>
      
    </>
  )
}