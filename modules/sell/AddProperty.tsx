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

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;
const url = `${API_ENDPOINT}/property/put_property_for_sale}`



const PropertyForm = () => {

  let countryData = Country.getAllCountries();
  const [country, setCountry] = useState(countryData[0]);
  const [targetCountry, setTargetCountry] = useState('')

  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState([]);
  // const [country, setCountry] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {})

  // useEffect(() => {
  //   setState(State.getStatesOfCountry(targetCountry.isoCode))
  //   console.log(targetCountry)
  // }, [country])
  
  
  
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
    <Box maxWidth="500px" mx="auto">
      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Type</FormLabel>
          <Input
            type="text"
            placeholder="Enter type"
            value={type}
            onChange={(event) => setType(event.target.value)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Street</FormLabel>
          <Input
            type="text"
            placeholder="Enter street"
            value={street}
            onChange={(event) => setStreet(event.target.value)}
          />
        </FormControl>
        <Flex mb={4}>
          <FormControl mr={2}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </FormControl>
         
          {/* <FormControl mr={2}>
            <FormLabel>State</FormLabel>
            <Select value={country} onChange={(event) => setCountry(event.target.value)}>
        
        {state.map((state) => (<option value={state.name}>{state.name}</option>))}
      </Select>
          </FormControl> */}
          
          <FormControl>
      <FormLabel>Country</FormLabel>
      <Select value={country.name} onChange={(event) => setTargetCountry(event.target.value)}>
        
        {/* {countryData.map((name, index) => <option key={index} value={country.name}>{country.name}</option>)} */}
        {countryData.map((country) => (<option value={country.name}>{country.name}</option>))}
      </Select>
</FormControl>

        </Flex>
        <FormControl mb={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </FormControl>
        <Button type="submit" bg="green.900" color="white">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default PropertyForm;
