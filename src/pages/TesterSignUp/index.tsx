import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { TesterSignUpType } from "../../features/testerSignUp/api/types";
import Blur from "../../features/testerSignUp/components/Blur";
import SideHero from "../../features/testerSignUp/components/SideHero";
import SignUpCard from "../../features/testerSignUp/components/SignUpCard";
import TesterMockupGroup from "../../features/testerSignUp/components/TestersMockupGroup";

interface TesterLoginProps {}

const TesterSignUp: FunctionComponent<TesterLoginProps> = () => {
  return (
    <Box position={"relative"}>
      <Container
        as={SimpleGrid}
        maxW={"7xl"}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
      >
        <SideHero />
        <SignUpCard />
      </Container>
      <Blur
        position={"absolute"}
        top={-10}
        left={-10}
        style={{ filter: "blur(70px)" }}
      />
    </Box>
  );
};

export default TesterSignUp;
