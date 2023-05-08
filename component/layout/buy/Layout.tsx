//import { Flex, Box, Heading, Text, Spacer } from "@chakra-ui/react";


export interface IBuyLayout{
  children: React.ReactNode;
  sidebarContent: React.ReactNode
}



import { Box, Flex, Heading, Select, SimpleGrid, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spacer, Text, useBreakpointValue } from "@chakra-ui/react";
import LayoutMenu from "./LayoutMenu";
import Nav from "../../../modules/landingPage/components/Nav";

function BuyLayout({children, sidebarContent}: IBuyLayout) {
  const sidebarWidth = useBreakpointValue({ base: "100%", md: "33.33%" });
  const mainWidth = useBreakpointValue({ base: "100%", md: "66.67%" });
  const showSelect = useBreakpointValue({ base: false, md: true });

  return (
    <Box>
      {/* Top Navigation */}
      
        <Nav/>
        <LayoutMenu/>
      

      {/* Body */}
      <Flex direction={{ base: 'column', md: 'row' }} px={{ base: 6, md: '5%' }} alignItems={{ base: 'flex-start', md: 'center' }}>
  <Box p={{ base: 4, md: 0 }} mb={{ base: 4, md: 0 }}>
    <Text fontWeight="bold" fontSize={{ base: 'xl', md: '2xl' }} color="#1CA5AE" mb={{ base: 1, md: 0 }}>
      298 results <Text color={'gray.500'} fontWeight='light' fontSize={{ base: 'sm', md: 'md' }} mt={{ base: '1px', md: 0 }} as='span'>in Abuja, Nigeria</Text>
    </Text>
  </Box>
  <Spacer />
  {showSelect && (
        <Box p={{ base: 2, md: 4 }}>
          <Select
            border="none"
            borderRadius="none"
            borderBottomColor="gray.200"
            bg="transparent"
            fontSize={{ base: 'sm', md: 'md' }}
            _focus={{ boxShadow: "none" }}
            _hover={{ borderColor: "gray.400" }}
            _active={{ borderColor: "gray.500" }}
          >
            <option value="option1">Newest</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      )}
</Flex>

      <Flex p="4" px={{base: 6, md:16}} flexDirection={{ base: "column", md: "row" }}>
        {/* Main Component */}
        <Box w={mainWidth} p="4" bg="white">
        

          <Heading size="md" mb="4">
            Popular Residencies
          </Heading>
          
          <Box h={{md: "500px" }} overflowY={{md: "scroll"}}>
            {children}
          </Box>
          
            
        </Box>

        {/* Sidebar Component */}
        <Box display={{base: 'none', md: 'block'}} w={sidebarWidth} p="4"  boxShadow="md">
          
            {sidebarContent}
          
          {/* Add your sidebar component code here */}
        </Box>
      </Flex>
    </Box>
  );
}

export default BuyLayout;
