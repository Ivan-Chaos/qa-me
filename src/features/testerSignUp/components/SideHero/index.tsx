import {
  Stack,
  Heading,
  Flex,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import TesterMockupGroup from "../TestersMockupGroup";

const SideHero: FunctionComponent = () => {
  return (
    <Stack spacing={{ base: 10, md: 20 }} pt={'10vh'}>
      <Heading
        lineHeight={1.1}
        fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
      >
        Freelance manual QA{" "}
        <Text
          as={"span"}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text"
        >
          &
        </Text>{" "}
        Beta tester
      </Heading>
      <Stack direction={"row"} spacing={4} align={"center"}>
        <TesterMockupGroup />
        <Text fontFamily={"heading"} fontSize={{ base: "4xl", md: "6xl" }}>
          +
        </Text>
        <Flex
          align={"center"}
          justify={"center"}
          fontFamily={"heading"}
          fontSize={{ base: "sm", md: "lg" }}
          bg={"gray.800"}
          color={"white"}
          rounded={"full"}
          minWidth={useBreakpointValue({ base: "44px", md: "60px" })}
          minHeight={useBreakpointValue({ base: "44px", md: "60px" })}
          position={"relative"}
          _before={{
            content: '""',
            width: "full",
            height: "full",
            rounded: "full",
            transform: "scale(1.125)",
            bgGradient: "linear(to-bl, orange.400,yellow.400)",
            position: "absolute",
            zIndex: -1,
            top: 0,
            left: 0,
          }}
        >
          YOU
        </Flex>
      </Stack>
    </Stack>
  );
};

export default SideHero;
