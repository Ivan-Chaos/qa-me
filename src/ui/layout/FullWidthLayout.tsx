import { SimpleGrid, Box } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import blurbg from "../../assets/images/blurbg.svg";

interface FullWidthLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const FullWidthLayout: FunctionComponent<FullWidthLayoutProps> = ({
  children,
}) => {
  return (
    <Box
      backgroundImage={blurbg}
      backgroundSize={"contain"}
      backgroundRepeat={"no-repeat"}
      minH={"100vh"}
    >
      <Navbar />
      <SimpleGrid gridTemplateColumns={"auto 1300px auto"} mt={"3rem"}>
        <Box gridColumn={"2"}>{children}</Box>
      </SimpleGrid>
    </Box>
  );
};

export default FullWidthLayout;
