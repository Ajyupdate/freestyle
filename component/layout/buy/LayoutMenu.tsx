import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Button, InputGroup, InputLeftElement, Input, Select } from "@chakra-ui/react";

function LayoutMenu() {
  return (
    <Flex px={{base: 6, md:16}} mt={'2rem'} direction={["column", "row"]} align="center" justify="center">
      
      <InputGroup size="lg" flex="2" mr={[0, "1rem"]} mb={["1rem", 0]}>
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input type="text" placeholder="Search" />
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