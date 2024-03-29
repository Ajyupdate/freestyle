import { Box } from "@chakra-ui/react";
import Footer from "../../../modules/landingPage/components/Footer"
import Nav from "../../../modules/landingPage/components/Nav";


export interface ILandingPageLayout{
    children: React.ReactNode;
}
export default function Layout({ children,  }: ILandingPageLayout) {
  return (
    <Box bg='rgb(244, 254, 255)'>
    
      {/* <Navbar /> */}
      <Nav/>
      <Box mx={{base: 8 ,md: 20}}>{children}</Box>
      <Footer />
    </Box>
  )
}