
import * as React from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  HStack,
  Button,
  Stack,
  Flex,
  Box,
  Text,
  Link,
  Checkbox,
  Center,
  Container,
  useToast
} from "@chakra-ui/react";
import * as Yup from 'yup'
import { useRouter } from 'next/router';
const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


interface ISignUpFormProps{
  first_name:   string;
    last_name:    string;
    email:        string;
    phone_number: string;
    street:       string;
    password:     string;
   confirmPassword: string,


}
export default function SignUpForm() {
  const toast = useToast()
  const router = useRouter()
  const initialValues:ISignUpFormProps  = { 
    first_name: '',
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone_number: "",
    // city: '',
    street: ''


   };

  const validationSchema = Yup.object({
    first_name: Yup.string().max(15, 'must not exceed 15 character').required("First name is required"),
    last_name: Yup.string().max(15, 'must not exceed 15 character').required("Last name is required"),
    email: Yup.string().email('Invalid email address').required("email is required"),
    phone_number: Yup.number().min(11, 'must not be less than 11').required("Phone numeber is required"),
    // city: Yup.string().required(),
    // street: Yup.string().required(),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'),], 'Passwords must match')
    .required('Required'),
  })
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const { confirmPassword, ...data } = values;
        console.log(data)
        fetch(`${API_ENDPOINT}seller/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.success){
              console.log("Success:", data);
              router.push('/auth/sign-in')
              toast({
                title: 'Account created',
                description:`account succesfully created`,
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
            }else {
              console.log(data)
              toast({
                title: 'Failed',
                description:`${data.message}`,
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
            }
            
            
          })
          .catch((error) => {
            console.error("Error:", error);
            toast({
              title: 'Failed Login',
              description:`${error}`,
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          });
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  >
          {/* <Container width={'100%'}> */}
          <Flex 
          direction={{ base: "column", md: "row" }}
           wrap="wrap" justify="space-between"
            mx={{md:24, base: 8}}    
           
           >
            <FormControl my={3} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid black;", // apply custom border style
                  
                }}
                rounded={'none'}
                placeholder='First Name'
                size={'lg'}
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur('first_name')}
              />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="first_name" />
              </Box>
            </FormControl>

            <FormControl my={3} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                rounded={'none'}
                placeholder='Last Name'
                size={'lg'}
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur('last_name')}
              />
             <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="last_name" />
              </Box>
            </FormControl>

            <FormControl my={3} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                onBlur={handleBlur('email')}
                rounded={'none'}
                size={'lg'}
                placeholder='Email'
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="email" />
              </Box>
            </FormControl>  

            <FormControl my={3} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
             
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                onBlur={handleBlur('phone_number')}
                rounded={'none'}
                placeholder='Phone Number'
                size={'lg'}
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
              />
              <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="phone_number" />
              </Box>
            </FormControl>

            

            <FormControl my={3} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                onBlur={handleBlur('password')}
                rounded={'none'}
                placeholder='Password'
                size={'lg'}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
               <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="password" />
              </Box>
            </FormControl>

            <FormControl my={3} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                
                onBlur={handleBlur('confirmPassword')}
                rounded={'none'}
                placeholder='Confirm Password'
                size='lg'
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
               <Box mt={2} color="red.500" fontSize="sm">
                <ErrorMessage name="confirmPassword" />
              </Box>
            </FormControl>

            <FormControl my={3} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
            <Input
                css={{
                  padding: '30px',
                  border: "1px solid  black", // apply custom border style
                  
                }}
                onBlur={handleBlur('street')}
                rounded={'none'}
                placeholder='street'
                size={'lg'}
                name="street"
                value={values.street}
                onChange={handleChange}
              />
              <ErrorMessage  name='street'/>
              
            </FormControl> 

            <FormControl my={3} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
            {/* <Input
              placeholder='City'
                size={'lg'}
                name="City"
                value={values.city}
                onChange={handleChange}
              />
              <ErrorMessage  name='city'/> */}
            </FormControl> 

          </Flex>
          

          <Box >
            
            <Center mb={4} >
              <Flex justify={'space-between'} gap={2} mx={8}>
              <Checkbox size={'lg'} >
              </Checkbox>
                <Text mt={{base: 4, md: 'unset'}}>
                  I would like to receive updates, tips and exciting offers from RealEstatery</Text>
              </Flex>
              
            </Center>
                  
            

            <Flex mx={{md:'unset', base: 8}} justify="center" pt={2} align='center' >
              <Button
              w={{base: '100%', md:"60%"}} mx={2}
                rounded={'none'}
                onClick={() => handleSubmit()}
                // w={{base: '100%', md: '100%'}}
                loadingText="Submitting"
                size="lg"
                bg={'green.900'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Sign up
              </Button>
            </Flex>

            
            <Stack pt={6}>
              <Text align={'center'} color='green.900' fontWeight={900}>
                Already have an account?  <Link href={'/auth/sign-in'} fontWeight={'extrabold'} color={'#03373A'}>Login</Link>
              </Text>
            </Stack>
          </Box>
          {/* </Container> */}
        </Form>
      )}
    </Formik>
  );
}
