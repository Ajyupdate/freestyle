import {
  Box,
  Flex,
  FormControl,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import * as React from "react";
import Cookies from "universal-cookie";
import * as Yup from "yup";
import MyButton, { SubmittingButton } from "../../utils/button";

const cookies = new Cookies();

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT;

interface ISignInFormProps {
  email: string;
  password: string;
}
export default function SignInForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  // const { data: session } = useSession()
  // console.log(session)

  const router = useRouter();
  const toast = useToast();
  const initialValues: ISignInFormProps = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ email, password }) => {
        setIsLoading(true);
        const result = await signIn("credentials", {
          email: email,
          password: password,
          redirect: false,
          // callbackUrl: "/",
        });
        if (result?.ok) {
          setIsLoading(false);
          router.push("/");
          toast({
            title: "Succesful Login",
            description: "Login Successful",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else {
          setIsLoading(false);
          toast({
            title: "Failed Login",
            description: "Incorrect username or password",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      }}
    >
      {({ values, handleBlur, errors, handleChange, handleSubmit }) => (
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
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur("email")}
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

              <FormControl
                w={{ base: "100%", md: "70%" }}
                mx={{ md: "2" }}
                my={4}
                flex={{ base: "1 0 100%", md: "1 0 45%" }}
              >
                <Input
                  css={{
                    padding: "30px",
                    border: "1px solid black;", // apply custom border style
                  }}
                  onBlur={handleBlur("password")}
                  rounded={"none"}
                  placeholder="Password"
                  size={"lg"}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />

                <Box mt={2} color="red.500" fontSize="sm">
                  <ErrorMessage name="password" />
                </Box>
              </FormControl>
            </Flex>

            <Box>
              <Flex
                mx={{ md: "unset", base: 8 }}
                align="center"
                color={"green.800"}
                mb={8}
                justify={"right"}
              >
                <Link fontWeight={900} mr={{ md: "15%" }}>
                  Forgot Password?
                </Link>
              </Flex>

              <>
                {!isLoading ? (
                  <MyButton
                    buttonText={"sign in"}
                    handleSubmit={handleSubmit}
                  />
                ) : (
                  <SubmittingButton />
                )}
              </>

              <Stack pt={6}>
                <Text align={"center"} color="green.900" fontWeight={900}>
                  I do not have an account?{" "}
                  <Link
                    href={"/auth/sign-up"}
                    fontWeight={"extrabold"}
                    color={"#03373A"}
                  >
                    Sign Up
                  </Link>
                </Text>
              </Stack>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
