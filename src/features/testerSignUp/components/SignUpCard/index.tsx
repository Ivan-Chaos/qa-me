import {
  Stack,
  Heading,
  Input,
  Button,
  Text,
  Box,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { FunctionComponent } from "react";
import { TesterSignUpType } from "../../api/types";
import { TesterSignUpValidationSchema } from "../../services/validationSchemas";

interface SignUpCardProps {}

const SignUpCard: FunctionComponent<SignUpCardProps> = () => {
  const formik = useFormik<TesterSignUpType>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log("🚀 ~ file: index.tsx:61 ~ values:", values);
    },
    validationSchema: TesterSignUpValidationSchema,
    validateOnChange: false,
  });
  return (
    <Stack
      bg={"gray.50"}
      rounded={"xl"}
      p={{ base: 4, sm: 6, md: 8 }}
      spacing={{ base: 8 }}
      maxW={{ lg: "lg" }}
    >
      <Stack spacing={4}>
        <Heading
          color={"gray.800"}
          lineHeight={1.1}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        >
          Your testing job awaits
          <Text
            as={"span"}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
          >
            !
          </Text>
        </Heading>
        <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
          Here at QaMe we believe that anyone can become a tester. Become a part
          of our amazing team and get your first hand on experience in
          beta-testing.
        </Text>
      </Stack>
      <Box as={"form"} mt={10}>
        <Stack spacing={4}>
          <FormControl isInvalid={!!formik.errors.firstName}>
            <Input
              name={"firstName"}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              placeholder="First name"
              bg={"gray.100"}
              border={0}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />

            <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.lastName}>
            <Input
              name={"lastName"}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              placeholder="Last name"
              bg={"gray.100"}
              border={0}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{formik.errors.lastName}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.email}>
            <Input
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Email"
              type={"email"}
              bg={"gray.100"}
              border={0}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.phoneNumber}>
            <Input
              name={"phoneNumber"}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              placeholder="Phone number"
              bg={"gray.100"}
              border={0}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
          </FormControl>
        </Stack>
        <Button
          fontFamily={"heading"}
          mt={8}
          w={"full"}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
          onClick={() => formik.submitForm()}
        >
          Sign up
        </Button>
      </Box>
      form
    </Stack>
  );
};

export default SignUpCard;
