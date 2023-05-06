import { Button } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const MyButton = ({ buttonText, handleSubmit }: any) => {
  return (
    <Flex mx={{md:'unset', base: 8}} justify="center" pt={2} align='center' >
    <Button
    onClick={() => handleSubmit()}
    w={{base: '100%', md:"60%"}} mx={2}
    rounded={'none'}
   
    loadingText="Submitting"
    size="lg"
    bg={'green.900'}
    color={'white'}
    
    >
      {buttonText}
    </Button>
    </Flex>
  );
};

export default MyButton;


export const SubmittingButton = () => {
    return (
        <Flex mx={{md:'unset', base: 8}} justify="center" pt={2} align='center'>
            <Button
            isLoading
            loadingText='Submitting'
            colorScheme='teal'
            variant='outline'
            />

            
        </Flex>
    )
}

