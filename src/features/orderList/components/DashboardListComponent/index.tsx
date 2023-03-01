import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { FunctionComponent, useState } from "react";
import ClearOrderList from "../ClearOrderList";
import ToggleComponent from "../ToggleComponent";

interface DashboardListComponentProps {}

const DashboardListComponent: FunctionComponent<
  DashboardListComponentProps
> = () => {
  const [orderToggle, setOrderToggle] = useState(0);

  const ordersCount = 32;

  return (
    <Box
      borderRadius={"1rem"}
      boxShadow={"0px 0px 0.5rem 0.5rem rgba(0, 0, 0, 0.01)"}
      bg={"white"}
      px={"1.5rem"}
      py={"2rem"}
    >
      <Flex justifyContent={"space-between"} mb={"2rem"}>
        <Box>
          <Heading fontSize={"1.5rem"}>Orders</Heading>
          <Text>
            Completed this month:{" "}
            <Text display={"inline"} fontWeight={700} color={"pink.400"}>
              32
            </Text>
          </Text>
        </Box>

        <ToggleComponent
          items={["all", "new", "in progress"]}
          itemIndex={orderToggle}
          setItemIndex={setOrderToggle}
        />
      </Flex>
      <Box w={"100%"} borderRadius={"2rem"} bg={"gray.100"} p={"2rem"}>
        <ClearOrderList />
      </Box>
    </Box>
  );
};

export default DashboardListComponent;
