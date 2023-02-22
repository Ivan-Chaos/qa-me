import {
  Stack,
  Heading,
  Input,
  Button,
  Text,
  Box,
  FormControl,
  FormErrorMessage,
  SimpleGrid,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { GroupBase, Select } from "chakra-react-select";
import { useFormik } from "formik";
import { FunctionComponent, useMemo } from "react";
import { CountryData, TesterSignupFormType } from "../../api/types";
import { TesterSignUpValidationSchema } from "../../services/validationSchemas";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-country-flag";

interface SignUpCardProps {}

const SignUpCard: FunctionComponent<SignUpCardProps> = () => {
  const formik = useFormik<TesterSignupFormType>({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("🚀 ~ file: index.tsx:61 ~ values:", values);
    },
    validationSchema: TesterSignUpValidationSchema,
    validateOnChange: false,
  });

  const countryOptions = useMemo(
    () =>
      countryList()
        .getData()
        .map((country) => ({
          label: (
            <Flex alignItems={"center"}>
              <ReactCountryFlag
                countryCode={country.value}
                svg
                style={{ width: "1.5rem" }}
              />
              <Text ml={"1rem"}>{country.label}</Text>
            </Flex>
          ),
          value: country.label,
        })),
    []
  );
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
          <SimpleGrid gridTemplateColumns={"1fr 1fr"} gap={"0.5rem"}>
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
          </SimpleGrid>

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
          <FormControl isInvalid={!!formik.errors.country}>
            <Select<CountryData, true, GroupBase<CountryData>>
              placeholder={"Select your country"}
              options={countryOptions}
              chakraStyles={{
                container: (provided) => ({
                  bg: "gray.100",
                  border: "transparent",
                  borderRadius: "6px",
                }),
                dropdownIndicator: (provided, state) => ({
                  ...provided,
                  borderLeft: "none",
                  bg: "transparent",
                }),

                placeholder: (provided) => ({
                  ...provided,

                  opacity: 0.8,
                  fontSize: { base: "1rem", lg: "md" },
                }),
                indicatorSeparator: () => ({ display: "none" }),
                indicatorsContainer: (provided) => ({
                  ...provided,
                  cursor: "pointer",
                  bg: "rgba(0, 0, 0, 0)",
                }),
              }}
              value={
                formik.values.country !== ""
                  ? countryOptions.find(
                      (e) => e.value === formik.values.country
                    )
                  : undefined
              }
              onChange={(newValue) => {
                formik.setFieldValue("country", (newValue as any).value);
              }}
            />

            <FormErrorMessage color="red">
              {formik.errors.country}
            </FormErrorMessage>
          </FormControl>

          <Divider />
          <FormControl isInvalid={!!formik.errors.password}>
            <Input
              name={"password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Password"
              bg={"gray.100"}
              border={0}
              type={"password"}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!formik.errors.confirmPassword}>
            <Input
              name={"confirmPassword"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              placeholder="Confirm password"
              bg={"gray.100"}
              border={0}
              type={"password"}
              color={"gray.900"}
              _placeholder={{
                color: "gray.500",
              }}
            />
            <FormErrorMessage>{formik.errors.confirmPassword}</FormErrorMessage>
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
