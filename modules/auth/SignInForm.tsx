




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

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


interface ISignInFormProps{
  email: string,
  password: string,
}
export default function SignInForm() {
  console.log(API_ENDPOINT)
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
        const postBody = {email, password}
        console.log(postBody)
        
        const handleSubmit = async() => {

      //   try{
      //     const response = await fetch(`${API_ENDPOINT}/seller/login`, {
      //       method: 'POST',
      //       headers:{
      //         "Content-Type": "application/json"
      //       },
      //       body: JSON.stringify({email, password}),
      //     })

      //     if(!response.ok){
      //      console.log('Login failed')
      //     }
      //     // const {token} = await response.json()
      //     // console.log(token)
      //     // localStorage.setItem('token', token)
      //     // router.push('/')
      //     console.log(response)
      //   } catch (error){
        
      //     toast({
      //       title: 'Login failed',
      //       description:`${ error}`,
      //       status: "error",
      //       duration: 5000,
      //       isClosable: true,
      //     })
      //   }

      

        const response = await fetch(`${API_ENDPOINT}seller/login`, {
          method: 'POST',
          headers: {
            // 'Content-Type': 'application/json',
           
            // "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ email, password })
          
        });
        console.log(response)
    
        const data = await response.json();
        console.log(data)
    

      }
      handleSubmit()

      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  onSubmit={handleSubmit}>
          <Box>
          <Flex 
          direction={{ base: "column", md: "column" }}
           wrap="wrap" 
           mx={{md:'unset', base: 8}}    
           align="center" justify="center"
           
           >
            

           
            <FormControl  w={{ base: '100%', md: "70%"}} mx={{md: '2'}} my={4} flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
              
              css={{
                padding: '30px',
                border: "1px solid black;", // apply custom border style
                
              }}
              rounded={'none'}
              size={'lg'}
                placeholder='Email'
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <ErrorMessage  name='email'/>
            </FormControl>  

            

            <FormControl w={{ base: '100%', md: "70%"}} mx={{md: '2'}} my={4}  flex={{ base: "1 0 100%", md: "1 0 45%" }}>
              
              <Input
              css={{
                padding: '30px',
                border: "1px solid black;", // apply custom border style
                
              }}
              rounded={'none'}
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
          

          <Box >
            
            <Flex 
            
             mx={{md:'unset', base: 8}}    
             align="center" 
            color={'green.800'} mb={8}  justify={'right'}     >
              <Link fontWeight={900} mr={{md: '15%'}}>
                Forgot Password?
              </Link>
            </Flex>
                  
            

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
                LogIn
              </Button>
            </Flex>

            <Stack pt={6}>
              <Text align={'center'} color='green.900' fontWeight={900}>
                I do not have an account? <Link href={'/auth/sign-up'} fontWeight={'extrabold'} color={'#03373A'}>Sign Up</Link>
              </Text>
            </Stack>
          </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}






// import { useState } from "react";
// import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
// import { Formik, Form, Field } from "formik";
// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// interface LoginResponseData {
//   token: string;
//   user: {
//     id: string;
//     name: string;
//     email: string;
//   };
// }
// export default function SignInForm() {
//   const handleSubmit = async (values: LoginFormValues) => {
//     try {
//       const response = await fetch(`${API_ENDPOINT}/seller/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(values)
//       });

//       const data:LoginResponseData = await response.json();

//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
//       {() => (
//         <Form>
//           <Stack>

//             <Field name="email">
//               {({ field }:any) => (
//                 <FormControl id="email" isRequired>
//                   <FormLabel>Email address</FormLabel>
//                   <Input type="email" {...field} />
//                 </FormControl>
//               )}
//             </Field>

//             <Field name="password">
//             {({ field }:any) => (
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <Input type="password" {...field} />
//               </FormControl>
//             )}
//             </Field>

//             <Button type="submit">Sign In</Button>
//             </Stack>
         
//         </Form>
//       )}
//     </Formik>
//   );
// }


// interface LoginResponse {
//   token: string;
//   user: {
//     id: number;
//     name: string;
//     email: string;
//   };
// }

// async function handleSubmit(values: LoginFormValues) {
//   try {
//     const response = await fetch("/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     });

//     const data: LoginResponse = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// // ...

// const [isLoading, setIsLoading] = useState(false);

// return (
//   <Formik
//     initialValues={{ email: "", password: "" }}
//     onSubmit={handleSubmit}
//     validate={validateLoginForm}
//   >
//     {({ handleSubmit, isSubmitting }) => (
//       <form onSubmit={handleSubmit}>
//         <FormControl isRequired>
//           <FormLabel>Email address</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             disabled={isLoading}
//           />
//         </FormControl>
//         <FormControl isRequired>
//           <FormLabel>Password</FormLabel>
//           <Input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             disabled={isLoading}
//           />
//         </FormControl>
//         <Button type="submit" isLoading={isLoading}>
//           Sign In
//         </Button>
//       </form>
//     )}
//   </Formik>
// );



// import { useState } from "react";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   useToast,
// } from "@chakra-ui/react";
// import { Formik, FormikHelpers } from "formik";

// interface LoginFormValues {
//   email: string;
//   password: string;
// }

// interface LoginResponse {
//   token: string;
//   user: {
//     id: number;
//     name: string;
//     email: string;
//   };
// }

// async function login(values: LoginFormValues): Promise<LoginResponse> {
//   const response = await fetch("/login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(values),
//   }); 

//   const data: LoginResponse = await response.json();
//   return data;
// }

// export default function LoginForm() {
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   async function handleSubmit(
//     values: LoginFormValues,
//     actions: FormikHelpers<LoginFormValues>
//   ) {
//     setIsLoading(true);

//     try {
//       const data = await login(values);
//       console.log(data);
//       toast({
//         title: "Login successful",
//         status: "success",
//         duration: 5000,
//         isClosable: true,
//       });
//     } catch (error) {
//       console.error(error);
//       toast({
//         title: "Login failed",
//         status: "error",
//         description: error.message,
//         duration: 5000,
//         isClosable: true,
//       });
//     } finally {
//       setIsLoading(false);
//       actions.setSubmitting(false);
//     }
//   }

//   function validateLoginForm(values: LoginFormValues) {
//     const errors: Partial<LoginFormValues> = {};

//     if (!values.email) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//       errors.email = "Invalid email format";
//     }

//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 6) {
//       errors.password = "Password must be at least 6 characters long";
//     }

//     return errors;
//   }

//   return (
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       onSubmit={handleSubmit}
//       // validate={validateLoginForm}
//     >
//       {({ handleSubmit, isSubmitting }) => (
//         <form onSubmit={handleSubmit}>
//           <FormControl isRequired>
//             <FormLabel>Email address</FormLabel>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               disabled={isLoading}
//             />
//           </FormControl>
//           <FormControl isRequired>
//             <FormLabel>Password</FormLabel>
//             <Input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               disabled={isLoading}
//             />
//           </FormControl>
//           <Button type="submit" isLoading={isLoading}>
//             Sign In
//           </Button>
//         </form>
//       )}
//     </Formik>
//   );
// }

