import { Flex, Button } from "@chakra-ui/react";

function LayoutMenu() {
  return (
    <Flex direction={["column", "row"]} align="center" justify="center">
      <Button size="lg" flex="2" mr={[0, "1rem"]} mb={["1rem", 0]}>
        Button 1
      </Button>
      <Button size="lg" flex="1" mb={["1rem", 0]}>
        Button 2
      </Button>
      <Button size="lg" flex="1" mr={[0, "1rem"]}>
        Button 3
      </Button>
      <Button size="lg" flex="1">
        Button 4
      </Button>
    </Flex>
  );
}
export default LayoutMenu