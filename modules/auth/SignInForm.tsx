




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

interface ISignInFormProps{
  email: string,
  password: string,
}
export default function SignInForm() {
  const initialValues:ISignInFormProps  = { 
    email: "",
    password: "",
   };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
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
          direction={{ base: "column", md: "column" }}
           wrap="wrap" justify="space-between"
           mx={{md:24, base: 8}}    
           
           >
            

           
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

            

          </Flex>
          

          <Box mx={{md:24, base: 8}} pr={{md:6}}>
            
            <Flex color={'green.800'} my={6} justify={'right'}     >
              <Link >
                Forgot Password?
              </Link>
            </Flex>
                  
            

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
                I do not have an account? <Link href={'/auth/login'} color={'#03373A'}>Sign Up</Link>
              </Text>
            </Stack>
          </Box>
          
        </Form>
      )}
    </Formik>
  );
}
