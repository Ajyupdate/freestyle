import { Button } from "@chakra-ui/react";

const MyButton = ({ children, ...rest }: any) => {
  return (
    <Button {...rest}>
      {children}
    </Button>
  );
};

export default MyButton;
