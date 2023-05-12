import * as React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import MyButton, { SubmittingButton } from '../../utils/button';
import * as Yup from 'yup'
import { ErrorMessage, Form, Formik } from 'formik';

interface IRequestPasswordResetProps{
    email: string;
}
const ForgotPassword = () => {
    const [isLoading, setIsLoading] = React.useState(false);
 
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Handle form submission here
  };

  const initialValues: IRequestPasswordResetProps = {
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("The field is Required"),
  });
  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={() => {}}
    
    >
        {({ values, handleBlur, errors, handleChange, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
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
                    <FormLabel>A new password will be sent to your email</FormLabel>
                    <Input
                    css={{
                        padding: "30px",
                        border: "1px solid black;", // apply custom border style
                    }}
                    onBlur={handleBlur('email')}
                    rounded={"none"}
                    size={"lg"}
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    />
                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="email" />
                </Box>
              </FormControl>
              </Flex>
              <>
                  {!isLoading ? (
                    <MyButton buttonText={'reset'} handleSubmit={handleSubmit}/>
                    ) :
                    (
                      <SubmittingButton/>
                    )
                  }
              </>
              </Box>
            </Form>
        )}

    </Formik>
      
  );
};

export default ForgotPassword;
