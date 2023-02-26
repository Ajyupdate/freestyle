//import { Flex, Box, Heading, Text, Spacer } from "@chakra-ui/react";


export interface IBuyLayout{
  children: React.ReactNode;
  sidebarContent: React.ReactNode
}
// function BuyLayout({children, sidebarContent}: IBuyLayout) {
//   return (
//     <Flex height="100vh">
//       <Box width="66.67%" backgroundColor="gray.100">
//         {children}
//         {/* <Flex direction="column" height="100%">
//           <Box p="4">
//             <Heading as="h1" size="lg" mb="2">
//               Main Component
//             </Heading>
//             <Text mb="4">
//               This is the main component with 2 items on each row.
//             </Text>
//           </Box>
//           <Flex direction="row" flexWrap="wrap" flexGrow={1}>
//             <Box flex="1 1 50%" p="4">
//               <Box
//                 backgroundColor="white"
//                 height="200px"
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 overflow="hidden"
//                 p="6"
//               >
//                 <Heading as="h2" size="md" mb="2">
//                   Flex Item 1
//                 </Heading>
//                 <Text>
//                   This is the first flex item in the main component.
//                 </Text>
//               </Box>
//             </Box>
//             <Box flex="1 1 50%" p="4">
//               <Box
//                 backgroundColor="white"
//                 height="200px"
//                 borderWidth="1px"
//                 borderRadius="lg"
//                 overflow="hidden"
//                 p="6"
//               >
//                 <Heading as="h2" size="md" mb="2">
//                   Flex Item 2
//                 </Heading>
//                 <Text>
//                   This is the second flex item in the main component.
//                 </Text>
//               </Box>
//             </Box>
//           </Flex>
//         </Flex> */}
//       </Box>
//       <Box width="33.33%" backgroundColor="blue.100">
//         {sidebarContent}
//         {/* <Box p="4">
//           <Heading as="h1" size="lg" mb="2" color="white">
//             Sidebar Component
//           </Heading>
//           <Text color="white" mb="4">
//             This is the sidebar component, which contains a single item.
//           </Text>
//         </Box>
//         <Box
//           backgroundColor="white"
//           height="200px"
//           borderWidth="1px"
//           borderRadius="lg"
//           overflow="hidden"
//           p="6"
//         >
//           <Heading as="h2" size="md" mb="2">
//             Sidebar Item
//           </Heading>
//           <Text>This is the single item in the sidebar component.</Text>
//         </Box>*/}
//       </Box> 
//     </Flex>
//   );
// }

// export default BuyLayout;



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
            
         
          
          {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}> */}
            {/* Column 1 */}
            {/* <Box bg="gray.100" p="4" boxShadow="md"> */}
              {/* Add your column 1 component code here */}
            {/* </Box> */}

            {/* Column 2 */}
            {/* <Box bg="gray.100" p="4" boxShadow="md"> */}
              {/* Add your column 2 component code here */}
            {/* </Box> */}
          {/* </SimpleGrid> */}
        </Box>

        {/* Sidebar Component */}
        <Box w={sidebarWidth} p="4" bg="gray.100" boxShadow="md">
          <Heading size="lg" mb="4">
            Sidebar Component
          </Heading>
          {/* Add your sidebar component code here */}
        </Box>
      </Flex>
    </Box>
  );
}

export default BuyLayout;
