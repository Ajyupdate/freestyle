




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

interface ILoginFormProps{
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  city: string,
  country: string,
  password: string,
  confirmPassword: string,


}
export default function LoginForm() {
  const initialValues:ILoginFormProps  = { 
    firstName: '',
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    city: '',
    country: ''


   };

  const validationSchema = Yup.object({
    firstName: Yup.string().max(15, 'must not exceed 15 character').required('required'),
    lastName: Yup.string().max(15, 'must not exceed 15 character').required('required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.number().max(11, 'must not exceed 11').min(11, 'must not be less than 11').required(),
    city: Yup.string().required(),
    country: Yup.string().required(),
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
        console.log(values);
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  onSubmit={handleSubmit}>
          <Flex 
          direction={{ base: "column", md: "row" }}
           wrap="wrap" justify="space-between"
           mx={{md:24, base: 8}}    
           
           >
            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='First Name'
                size={'lg'}
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur('firstName')}
              />
              <ErrorMessage  name='firstName'/>
            </FormControl>

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='Last Name'
                size={'lg'}
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur('firstName')}
              />
              <ErrorMessage  name='lastName'/>
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
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <ErrorMessage  name='phoneNumber'/>
            </FormControl>

            <FormControl my={6} pr={{md:6}} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
              placeholder='City'
                size={'lg'}
                name="City"
                value={values.city}
                onChange={handleChange}
              />
              <ErrorMessage  name='city'/>
            </FormControl>

            <FormControl my={6} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
                placeholder='Country'
                size={'lg'}
                name="country"
                value={values.country}
                onChange={handleChange}
              />
              <ErrorMessage  name='country'/>
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

          </Flex>
          

          <Box>
            
            <Center my={6}>
              <Checkbox>I would like to receive updates, tips and exciting offers from RealEstatery</Checkbox>
            </Center>
                  
            

            <Stack spacing={10} pt={2} flex={1} align='center' >
              <Button
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
