import { Box, SimpleGrid } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface LoginLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const LoginLayout: FunctionComponent<LoginLayoutProps> = ({ children }) => {
  return (
    <SimpleGrid gridTemplateColumns={"auto 1300px auto"} minH={"100vh"}>
      <Box gridColumn={"2"}>{children}</Box>
    </SimpleGrid>
  );
};

export default LoginLayout;
