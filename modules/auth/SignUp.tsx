




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
} from "@chakra-ui/react";
import * as Yup from 'yup'

interface ISignUpFormProps{
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  // city: string,
  street: string,
  password: string,
  confirmPassword: string,


}
export default function SignUpForm() {
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
    first_name: Yup.string().max(15, 'must not exceed 15 character').required(),
    last_name: Yup.string().max(15, 'must not exceed 15 character').required(),
    email: Yup.string().email('Invalid email address').required(),
    phone_number: Yup.number().min(11, 'must not be less than 11').required(),
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
      // validationSchema={validationSchema}
      onSubmit={(values) => {
        const { confirmPassword, ...data } = values;
        fetch("https://real-estatery.herokuapp.com/seller/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  >
          <Flex 
          direction={{ base: "column", md: "row" }}
           wrap="wrap" justify="space-between"
           mx={{md:24, base: 8}}    
           
           >
            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='First Name'
                size={'lg'}
                name="first_name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur('first_name')}
              />
              <ErrorMessage  name='first_name'/>
            </FormControl>

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='Last Name'
                size={'lg'}
                name="last_name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur('last_name')}
              />
              <ErrorMessage  name='last_name'/>
            </FormControl>

            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
              size={'lg'}
                placeholder='Email'
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage  name='email'/>
            </FormControl>  

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
             
              <Input
                placeholder='Phone Number'
                size={'lg'}
                type="tel"
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
              />
              <ErrorMessage  name='phone_number'/>
            </FormControl>

            

            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='Password'
                size={'lg'}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <ErrorMessage  name='password'/>
            </FormControl>

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='Confirm Password'
                size='lg'
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <ErrorMessage  name='confirmPassword'/>
            </FormControl>

            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
            <Input
                placeholder='street'
                size={'lg'}
                name="street"
                value={values.street}
                onChange={handleChange}
              />
              <ErrorMessage  name='street'/>
              
            </FormControl> 

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
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
          

          <Box>
            
            <Center my={6}>
              <Checkbox>I would like to receive updates, tips and exciting offers from RealEstatery</Checkbox>
            </Center>
                  
            

            <Stack spacing={10} pt={2} flex={1} align='center' >
              <Button
                onClick={() => handleSubmit()}
                w={'50%'}
                loadingText="Submitting"
                size="lg"
                bg={'green.900'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Sign up
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                Already have an account? <Link href={'/auth/sign-in'} color={'#03373A'}>Login</Link>
              </Text>
            </Stack>
          </Box>
          
        </Form>
      )}
    </Formik>
  );
}
