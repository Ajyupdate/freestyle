import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Box,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import usePost from "../../hooks/usePost";
import { Country, State, City }  from 'country-state-city';
// import { getCountries, getStates, getCities } from 'country-state-city';

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const url = `${API_ENDPOINT}/property/put_property_for_sale}`



const PropertyForm = () => {

  let countryData = Country.getAllCountries();
  const [stateData, setStateData] = useState();
  const [cityData, setCityData] = useState();

  const [country, setCountry] = useState(countryData[0]);
  const [state, setState] = useState();
  const [city, setCity] = useState();

  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [street, setStreet] = useState("");
  const [price, setPrice] = useState("");


  const [selectedCountry, setSelectedCountry] = useState<string>();
const [selectedState, setSelectedState] = useState<string>();

// useEffect(() => {
//   console.log(State.getStatesOfCountry(selectedCountry))
// }, [selectedCountry])
  
  
  const {data, isLoading, error, postData}= usePost(url);
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const property = {
//       description,
//       type,
//       street,
//       city,
//       state,
//       country,
//       price,
//     };
//     postData(property);
//   };
const handleSubmit = async (event:any) => {
    event.preventDefault();
    const property = {
      description,
      type,
      street,
      city,
      state,
      country,
      price,
    };
    try {
      const response = await axios.post(url, property);
      console.log(response.data);
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  };
  
 
  return (
    <Box >
      <Flex
        direction={{ base: "column", md: "column" }}
        wrap="wrap"
        mx={{ md: "unset", base: 8 }}
        align="center"
        justify="center"
      >
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Type</FormLabel>
          <Select placeholder='Select option'>
          <option value='option1'>Mansion</option>
          <option value='option2'>Duplex</option>
          <option value='option3'>Option 3</option>
        </Select>
        </FormControl>

        

        <Flex mb={4} >
          <FormControl pr={4}>
            <FormLabel>Country</FormLabel>
            <Select  onChange={(e) => setSelectedCountry(e.target.value)}>
              {countryData.map((country) => (
                <option key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </Select>
          </FormControl>


          <FormControl mr={2}>
            <FormLabel>State</FormLabel>
            <Select  onChange={(e) => setSelectedState(e.target.value)}>
              {selectedCountry &&
                State.getStatesOfCountry(selectedCountry).map((state) => (
                  <option key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </option>
                ))}
            </Select>
          </FormControl>
         
        </Flex>
        <FormControl mb={4}>
          <FormLabel>Street</FormLabel>
          <Input
            type="text"
            
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />

        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </FormControl>
        <Flex
                mx={{ md: "unset", base: 8 }}
                justify="center"
                pt={2}
                align="center"
              >
                <Button
                  w={{ base: "100%", md: "100%" }}
                  mx={2}
                  rounded={"none"}
                  // onClick={() => handleSubmit()}
                  // w={{base: '100%', md: '100%'}}
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.900"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Sell
                </Button>
              </Flex>
      </form>


      </Flex>

    </Box>
  );
};

export default PropertyForm;
