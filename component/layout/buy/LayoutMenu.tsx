import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Button, InputGroup, InputLeftElement, Input, Select, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
function LayoutMenu() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <Flex  px={{base: 6, md:16}} mt={'2rem'} direction={["column", "row"]} align="center" justify="center">
      
      <InputGroup size="lg" flex="2" mr={[0, "1rem"]} mb={["1rem", 0]}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="Search" />
        <Text as={'span'} display={{base: 'block', md: 'none'}} >
          <Flex>
          <Icon 
          mt={3} ml={2}
            as={FaFilter} boxSize="3" color="gray.500" />
            <Select
            
                border="none"
                borderRadius="none"
                borderBottomColor="gray.200"
                bg="transparent"
                // fontSize={{ base: 'sm', md: 'md' }}
                _focus={{ boxShadow: "none" }}
                _hover={{ borderColor: "gray.400" }}
                _active={{ borderColor: "gray.500" }}
              >
                <option value="option1">Filter</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              </Flex>
          </Text>    

      </InputGroup>

      

      <Select color={'white'} display={{base: 'none', md: 'block'}} flex="1" mb={["1rem", 0]} placeholder='Type: House' bg={'#03373A'} size='lg'>
        <option value='option1'>ENG</option>
      </Select>


      <Select color={'white'} display={{base: 'none', md: 'block'}} size="lg" flex="1" ml={[0, '1rem']} mr={[0, "1rem"]} placeholder='Range: $2k-$8k' bg={'#03373A'} >
        <option value='option1'>ENG</option>
      </Select>
      
      <Select color={'white'} display={{base: 'none', md: 'block'}} size="lg" flex="1" placeholder='Type: House' bg={'#03373A'} >
        <option value='option1'>ENG</option>
      </Select>
    </Flex>
  );
}
export default LayoutMenu