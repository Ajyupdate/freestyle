// import React, { useEffect, useState } from "react";
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Flex,
//   Box,
//   Select,
// } from "@chakra-ui/react";
// import axios from "axios";
// import usePost from "../../hooks/usePost";
// import { Country, State, City }  from 'country-state-city';
// // import { getCountries, getStates, getCities } from 'country-state-city';

// const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
// const url = `${API_ENDPOINT}/property/put_property_for_sale}`



// const PropertyForm = () => {

//   let countryData = Country.getAllCountries();
//   const [stateData, setStateData] = useState();
//   const [cityData, setCityData] = useState();

//   const [country, setCountry] = useState(countryData[0]);
//   const [state, setState] = useState();
//   const [city, setCity] = useState();
//   const [countryName, setCountryName] = useState(country.name)
//   const [description, setDescription] = useState("");
//   const [type, setType] = useState("");
//   const [street, setStreet] = useState("");
//   const [price, setPrice] = useState("");


//   const [selectedCountry, setSelectedCountry] = useState<string>();
// const [selectedState, setSelectedState] = useState<string>();

//   useEffect(() => {
//     setCountryName(country.name)
//   }, [country])
  
//   const {data, isLoading, error, postData}= usePost(url);
// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     const property = {
// //       description,
// //       type,
// //       street,
// //       city,
// //       state,
// //       country,
// //       price,
// //     };
// //     postData(property);
// //   };
// const handleSubmit = async (event:any) => {
//     event.preventDefault();
//     const property = {
//       description,
//       type,
//       street,
//       city,
//       state,
//       selectedCountry,
//       price,
//     };
//     console.log(property)
//     // try {
//     //   const response = await axios.post(url, property);
//     //   console.log(response.data);
//     //   console.log(response)
//     // } catch (error) {
//     //   console.error(error);
//     // }
//   };
  
 
//   return (
//     <Box >
//       <Flex
//         direction={{ base: "column", md: "column" }}
//         wrap="wrap"
//         mx={{ md: "unset", base: 8 }}
//         align="center"
//         justify="center"
//       >
//       <form onSubmit={handleSubmit}>
//         <FormControl mb={4}
//         >
//           <FormLabel>Description</FormLabel>
//           <Input
//             type="text"
//             p={4}
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           />
//         </FormControl>

//         <FormControl mb={4}>
//           <FormLabel>Type</FormLabel>
//           <Select placeholder='Select option'>
//           <option value='option1'>Mansion</option>
//           <option value='option2'>Duplex</option>
//           <option value='option3'>Option 3</option>
//         </Select>
//         </FormControl>

        

//         <Flex mb={4} >
//           <FormControl pr={4}>
//             <FormLabel>Country</FormLabel>
//             <Select  onChange={(e) => setSelectedCountry(e.target.value)}>
//               {countryData.map((country) => (
//                 <option key={country.isoCode} value={country.isoCode}>
//                   {country.name}
//                 </option>
//               ))}
//             </Select>
//           </FormControl>


//           <FormControl mr={2}>
//             <FormLabel>State</FormLabel>
//             <Select  onChange={(e) => setSelectedState(e.target.value)}>
//               {selectedCountry &&
//                 State.getStatesOfCountry(selectedCountry).map((state) => (
//                   <option key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </option>
//                 ))}
//             </Select>
//           </FormControl>
         
//         </Flex>
//         <FormControl mb={4}>
//           <FormLabel>Street</FormLabel>
//           <Input
//             type="text"
            
//             value={street}
//             onChange={(event) => setStreet(event.target.value)}
//           />

//         </FormControl>
//         <FormControl mb={4}>
//           <FormLabel>Price</FormLabel>
//           <Input
//             type="number"
            
//             value={price}
//             onChange={(event) => setPrice(event.target.value)}
//           />
//         </FormControl>
//         <Flex
//                 mx={{ md: "unset", base: 8 }}
//                 justify="center"
//                 pt={2}
//                 align="center"
//               >
//                 <Button
//                   w={{ base: "100%", md: "100%" }}
//                   mx={2}
//                   rounded={"none"}
//                   onClick={ handleSubmit}
//                   // w={{base: '100%', md: '100%'}}
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={"green.900"}
//                   color={"white"}
//                   _hover={{
//                     bg: "green.500",
//                   }}
//                 >
//                   Sell
//                 </Button>
//               </Flex>
//       </form>


//       </Flex>

//     </Box>
//   );
// };

// export default PropertyForm;



import * as React from 'react'
import { Formik, Form, ErrorMessage, Field } from "formik";
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
  useToast,
  Select
} from "@chakra-ui/react";
import * as Yup from 'yup'
import { useRouter } from 'next/router';
import MyButton, { SubmittingButton } from '../../utils/button';
import { Country, State, City }  from 'country-state-city';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;


interface IAddPropertyFormProps{
    stateData:   string;
    cityData:    string;
    country:        string;
    state: string;
    city:       string;
    description:     string;
    type: string,
    street: string,
    price: number


}
export default function AddPropertyForm() {
  let countryData = Country.getAllCountries();
  const toast = useToast()
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState(false)
  const [selectedCountry, setSelectedCountry] = React.useState<string>();
  const [selectedState, setSelectedState] = React.useState<string>();

  const initialValues:IAddPropertyFormProps  = { 
    stateData:   '',
    cityData:    '',
    country:        countryData[0].name,
    state: '',
    city:       '',
    description:     '',
    type: '',
    street: '',
    price: 0

   };

  const validationSchema = Yup.object({
    type: Yup.string().max(15, 'must not exceed 15 character').required(),
    street: Yup.string().max(15, 'must not exceed 15 character').required(),
    price: Yup.string().required(),
    phone_number: Yup.number().min(11, 'must not be less than 11').required("Phone numeber is required"),
    description: Yup.string().required()
  })


  const {data}:any = useSession()
 const token = (data?.user?.token)
  
  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={validationSchema}
      
      onSubmit={(values, {setSubmitting}) => {
        const dataToSend = {
          country: values.country,
          state: values.state,
          city: values.city,
          description: values.description,
          type: values.type,
          street: values.street,
          price: values.price
        };
        const headers = {
          'Authorization': `Bearer ${token}`
        };

        // Send the data to the backend
        axios.post(`${API_ENDPOINT}property/put_property_for_sale`, dataToSend, { headers })
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
          .finally(() => {
            setSubmitting(false);
          });
      } }
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
        <Form  >
          <Box>
            <Flex
              direction={{ base: "column", md: "column" }}
              wrap="wrap"
              mx={{ md: "unset", base: 8 }}
              align="center"
              justify="center"
            >
              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Description</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('description')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="description" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>city</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('city')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="city" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>type</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('type')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="type" />
                </Box>
              </FormControl>

              {/* <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Type</FormLabel>
                <Field name="colors" as-="select" className="my-select"
                rounded={'none'}
                onChange={(e:any) => values.type = e.target.value}
                sx={{
                  height: "64px", // set the height of the select element
                  fontSize: "18px", // set the font size of the select element
                  padding: "16px", // set the padding of the select element
                  borderRadius: "8px", // set the border radius of the select element
                }}
                css={{
                  border: "1px solid black;", // apply custom border style
                }}
                placeholder='Select option'>
                  <option value='option1'>Mansion</option>
                  <option value='option2'>Duplex</option>
                  <option value='option3'>Option 3</option>
                </Field>
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="country" />
                </Box>
              </FormControl> */}

              
              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Country</FormLabel>
                 {/* <Select 
                 rounded={'none'}
                 sx={{
                   height: "64px", // set the height of the select element
                   fontSize: "18px", // set the font size of the select element
                   padding: "16px", // set the padding of the select element
                   borderRadius: "8px", // set the border radius of the select element
                 }}
                 css={{
                  border: "1px solid black;", // apply custom border style
                }}
                 
                 onChange={(e) => setSelectedCountry(e.target.value)}>
                 {countryData.map((country) => (
                <option key={country.isoCode} 
                onChange={handleChange}
                value={country.isoCode}>
                  {country.name}
                  </option>
                ))}
              </Select> */}

                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('country')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="country"
                  value={values.country}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="country" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>State</FormLabel>
                {/* <Select 
                css={{
                  border: "1px solid black;", // apply custom border style
                }}
                rounded={'none'}
                sx={{
                  height: "64px", // set the height of the select element
                  fontSize: "18px", // set the font size of the select element
                  padding: "16px", // set the padding of the select element
                  borderRadius: "8px", // set the border radius of the select element
                }}
                onChange={handleChange}>
                {selectedCountry &&
                State.getStatesOfCountry(selectedCountry).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
                </Select> */}

                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('state')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                />

                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="state" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Street</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('street')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="street"
                  value={values.street}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="street" />
                </Box>
              </FormControl>

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <FormLabel>Price in numbers (naira)</FormLabel>
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur('price')}
                  rounded={"none"}
                  size={"lg"}
                  
                  type="text"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="price" />
                </Box>
              </FormControl>
              

              
            </Flex>

           
            <Box>
              
              <>
                  {!isLoading ? (
                    <MyButton buttonText={'sign in'} handleSubmit={handleSubmit}/>
                    ) :
                    (
                      <SubmittingButton/>
                    )
                  }
              </>


              
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}


