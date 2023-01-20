// import { Box, Card, Center, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
// import Image from 'next/image'
// import React from 'react'
// import moneys from 'public/moneys.svg'
// import homehashtag from 'public/homehashtag.svg'
// import securitysafe from 'public/securitysafe.svg'
// import presentionchart from 'public/presentionchart.svg'


// export interface iWhyChooseUs {}

// const WhyChooseUs = () => {
//   return (
//     <Box px={16} mt='350'>
        
//         <Center>
//             <Heading>
//                 Why Choose Us 
//             </Heading>
//         </Center>
       
//        <Center>
//         <Text>RealEstatery is committed to helping you reach your satisfaction</Text>
//        </Center>

//        <Grid templateColumns='repeat(4, 1fr)' gap={6} mt='12'>

//           <GridItem w='100%' h='10'>
//             <Card>
//             <Center mr={4}><Image src={moneys}  alt="money icon"/></Center>
//             <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Best Prices</Text></Center>
//             <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
//             </Card>
//           </GridItem>

//           <GridItem w='100%' h='10'>
//             <Center mr={4}><Image src={presentionchart} alt="money icon"/></Center>
//             <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Security</Text></Center>
//             <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
//           </GridItem>
          
//           <GridItem w='100%' h='10'>
//             <Center mr={4}><Image src={securitysafe} alt="money icon"/></Center>
//             <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Stable Prices</Text></Center>
//             <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
            
//           </GridItem>

//           <GridItem w='100%' h='10'>
//             <Center mr={4}><Image src={homehashtag} alt="money icon"/></Center>
//             <Center><Text fontSize={30} mr={4} color='#1CA5AE'>Property Insurance</Text></Center>
//             <Center><Text px={4}>Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.</Text></Center>
            
//           </GridItem>
//       </Grid>
//     </Box>
//   )
// }

// export default WhyChooseUs



import { ComponentState} from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Center, Heading } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import moneys from 'public/moneys.svg'
import homehashtag from 'public/homehashtag.svg'
import securitysafe from 'public/securitysafe.svg'
import presentionchart from 'public/presentionchart.svg'
import Image from 'next/image';


interface FeatureProps {
  title: string;
  text: string;
  image: ComponentState;
}

const Feature = ({ title, text, image }: FeatureProps) => {
  return (
    <Stack>
      <Center>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          // color={'white'}
          // rounded={'full'}
          // bg={'gray.100'}
          mb={1}>
          <Image src={image} alt={title}/>
        </Flex>
        </Center>  
      <Center><Text fontSize={20} fontWeight={ 400} color='#1CA5AE' >{title}</Text></Center>
      <Text align={'center'} color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
  <Box px={20} mt={20}>        
      <Center mt={8}>
        <Heading>
            Why Choose Us 
        </Heading>
      </Center>
      
      <Center mt={3} mb={8}>
        <Text>RealEstatery is committed to helping you reach your satisfaction</Text>
       </Center>

      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
        <Feature
          image={moneys}
          title={'Best Prices'}
          text={
            'Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.'
          }
        />
        <Feature
          image={presentionchart}
          title={'Security'}
          text={
            'Better Interest rate on the market. RealEstatery gives you the opportunity of the best prices in the market.'
          }
        />
        <Feature
          image={securitysafe}
          title={'Stable Prices'}
          text={
            'We prevent unstable prices and we 99% guarantee no price changes on your property due to any impromptu costs.'
          }
        />
        <Feature
          image={homehashtag}
          title={'Property Insurance'}
          text={
            'We have a series of policies that offer either property protection or liability coverage. '
          }
        />
      </SimpleGrid>
    </Box>
  );
}