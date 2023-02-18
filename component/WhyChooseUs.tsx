
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
    <Stack 
    _hover={{
      boxShadow:'md',
      p: 2
    }}
    >
      <Center>
        <Flex
        
          direction={{ base: 'column', md: 'column' }}
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
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
  <Box px={[6, 16]} mt={20}>        
      <Center mt={8}>
        <Heading>
            Why Choose Us 
        </Heading>
      </Center>
      
      <Center mt={3} mb={8}>
        <Text align={'center'}>RealEstatery is committed to helping you reach your satisfaction</Text>
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