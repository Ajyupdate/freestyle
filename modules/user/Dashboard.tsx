import { Box, Card, CardBody, CardHeader, Flex, Heading, Image, Link, Stack, StackDivider, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    activity: "Active now",
    avatarUrl:
      "https://images.unsplash.com/photo-1552671990-4c5c0d03d4d1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGdyb3VwJTIwZGVzaWduJTIwcGhvdG8lMjBzaWduc3x8MHx8fHwxNjE5ODQzNjkx&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
  });

  useEffect(() => {
    // You can fetch the user data from an API here and set it to the state
  }, []);

  return (
    <Flex >
      <Box w="30%" >
        <Flex
          direction="column"
          justify="center"
          align="center"
          h="100%"
          p={8}
        >
          <Box
            w={40}
            h={40}
            rounded="full"
            overflow="hidden"
            boxShadow="md"
            _hover={{
              cursor: "pointer",
            }}
          >
            <Image
              src={"https://i.pravatar.cc/300"}
              w="100%"
              h="100%"
              objectFit="cover"
              transition="transform 0.3s"
              _hover={{
                transform: "scale(1.1)",
              }}
            />
          </Box>
          <VStack mt={4} spacing={1}>
            <Text fontSize="lg" fontWeight="bold">
              {userData.name}
            </Text>
            <Text fontSize="sm">{userData.activity}</Text>
          </VStack>
          <VStack mt={8} spacing={4}>
            {/* Add other user details here */}
          </VStack>
        </Flex>
      </Box>

      <Box w="70%" p={8}>

      <Card>
  <CardHeader>
    <Heading size='md'>Account Overview</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Account Details
        </Heading>
        <Text pt='2' fontSize='sm'>
          Ajibade Emmanuel
        </Text>
        <Text fontSize='xs'>Ajibadeemmanuel58gmail.com</Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Properties
        </Heading>
        <Text pt='2' fontSize='md'>
        
          3 houses listed for sale{' '}
          <Link color='teal.500' href='#'>
            see them
          </Link>

        </Text>

        <Text pt='2' fontSize='md'>
        
        5 houses listed for rent{' '}
        <Link color='teal.500' href='#'>
          see them
        </Link>

      </Text>

      <Text pt='2' fontSize='md'>
        
          4 houses sold{' '}
          <Link color='teal.500' href='#'>
            see them
          </Link>

        </Text>


      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Amount Transacted
        </Heading>
        <Text pt='2' fontSize='sm'>
          $50000
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>
        
        
      </Box>

    </Flex>
  );
};

export default Dashboard;
