//import { Flex, Box, Heading, Text, Spacer } from "@chakra-ui/react";


export interface IBuyLayout{
  children: React.ReactNode;
  sidebarContent: React.ReactNode
}



import { Box, Flex, Heading, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Text, useBreakpointValue } from "@chakra-ui/react";
import LayoutMenu from "./LayoutMenu";
import Nav from "./Nav";

function BuyLayout({children, sidebarContent}: IBuyLayout) {
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "33.33%" });
  const mainWidth = useBreakpointValue({ base: "100%", md: "66.67%" });

  return (
    <Box>
      {/* Top Navigation */}
      
        <Nav/>
        <LayoutMenu/>
      

      {/* Body */}
      {/* <Text>{'298 result'}</Text> */}
      <Flex p="4" px={{base: 6, md:16}} flexDirection={{ base: "column", md: "row" }}>
        {/* Main Component */}
        <Box w={mainWidth} p="4" bg="white">

          <Heading size="md" mb="4">
            Popular Residencies
          </Heading>
          
          <Box h="500px" overflowY="scroll">
            {children}
          </Box>
          
            
        </Box>

        {/* Sidebar Component */}
        <Box w={sidebarWidth} p="4"  boxShadow="md">
          
            {sidebarContent}
          
          {/* Add your sidebar component code here */}
        </Box>
      </Flex>
    </Box>
  );
}

export default BuyLayout;
