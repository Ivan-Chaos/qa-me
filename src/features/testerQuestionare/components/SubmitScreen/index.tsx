import { Button, Center, Heading, Box, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface SubmitScreenProps {}

const SubmitScreen: FunctionComponent<SubmitScreenProps> = () => {
  return (
    <Center h={"80vh"} bg={"white"}>
      <VStack spacing={"2rem"}>
        <Heading>Questionare completed!</Heading>
        <Button
          fontFamily={"heading"}
          mt={8}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          fontWeight={600}
          fontSize={"1.5rem"}
          h={"3rem"}
          px={"2rem"}
        >
          Submit your answers
        </Button>
      </VStack>
    </Center>
  );
};

export default SubmitScreen;
