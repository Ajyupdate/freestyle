




import * as React from 'react'
import { Formik, Form, ErrorMessage } from "formik";
import {
  FormControl,
  useToast,
  Input,
  Button,
  Stack,
  Flex,
  Box,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import * as Yup from 'yup'
import { useRouter } from "next/router";


interface ISignInFormProps{
  email: string,
  password: string,
}
export default function SignInForm() {
  const router = useRouter();
  const toast = useToast();
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
      // validationSchema={validationSchema}
      onSubmit= {({email, password}) => {
        
        const handleSubmit = async() => {

        try{
          const response = await fetch("https://real-estatery.herokuapp.com/seller/login", {
            method: 'POST',
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password}),
          })

          if(!response.ok){
            throw new Error('Login failed')
          }
          const {token} = await response.json()
          console.log(token)
          localStorage.setItem('token', token)
          router.push('/')
        } catch (error){
          toast({
            title: 'Login failed',
            description: "Please check your credentials and try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          })
        }

      }
      handleSubmit()


      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  onSubmit={handleSubmit}>
          <Container>
          <Flex 
          direction={{ base: "column", md: "column" }}
           wrap="wrap" justify="space-between"
          //  mx={{md:24, base: 8}}    
           
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
                onClick={() => handleSubmit()}
                w={{base: '100%', md: '90%'}}
                loadingText="Submitting"
                size="lg"
                bg={'green.900'}
                color={'white'}
                _hover={{
                  bg: 'green.500',
                }}>
                Sign in
              </Button>
            </Stack>

            <Stack pt={6}>
              <Text align={'center'}>
                I do not have an account? <Link href={'/auth/sign-up'} color={'#03373A'}>Sign Up</Link>
              </Text>
            </Stack>
          </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
}
