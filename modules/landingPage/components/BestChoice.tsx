
import { ComponentState, ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading, Spacer, Button } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import { SearchIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import fourKHouse from 'public/FourKHouse.svg'
import threeKHouse from 'public/threeKHouse.svg'
import sixKHouse from 'public/sixKHouse.png'
import { ISingleHouseProps } from '../../../component/types/HouseProps';


const SingleHome = ({ title, location, price, image }: ISingleHouseProps) => {
  return (
    
    <Stack align={{base: 'center',  }}>
      <Flex
        
        >
        <Image width={100000}  src={image} alt={title}/>
      </Flex>
      <Text color='#1CA5AE' fontSize={'2xl'} fontWeight={600}>${price}K</Text>
      <Text fontSize='30' fontWeight={500}>{title}</Text>
      <Text fontSize='20' fontWeight={500} color={'gray.600'}>{location}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box  px={{base: 6, md:'5%'}} mt={12}>
    
        <Flex
              
        >
            <Box py={4}>
                <Heading fontSize='lg' color='#1CA5AE'>Best Choices  </Heading>
                <Heading fontSize='2xl' py={4}>Popular Residencies</Heading>
            </Box>

            <Spacer/>
        
            <Button 
          
           
             rounded={'none'}
             mt={4} 
             leftIcon={<SearchIcon />}  
             colorScheme='teal' bg='#03373A' variant='solid'
             display={{base: 'none', md: 'block'}}
             >  
                Search by Location
            </Button>
        </Flex>

      <SimpleGrid columns={{ base: 1, md: 3 }}  spacing={{base:10, md: '2%'}}>
        <SingleHome
          image={fourKHouse}
          price={4000}
          title={'Primerose Mansion'}
          location={
            'Abuja Lagos'
          }
        />
        <SingleHome
          image={threeKHouse}
          price={3500}
          title={'Oakwood Mansion'}
          location={
            'Abuja Lagos'
          }
        />
        <SingleHome
          image={sixKHouse}
          price={6000}
          title={'Lambo Homes'}
          location={
            'Abuja Lagos'
          }
        />
      </SimpleGrid>

      <Stack align={'center'} mt={4}>
      <Button 
        rounded={'none'}
        w={{base: '80%', md: '50%'}} 
        mt={4} 
        leftIcon={<SearchIcon />}  
        colorScheme='teal' bg='#03373A' variant='solid'
        display={{base: 'block', md: 'none'}}
        >  
          Search by Location
      </Button>
      </Stack>
      

    </Box>
  );
}