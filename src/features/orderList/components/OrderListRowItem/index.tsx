import {
  Avatar,
  Box,
  Flex,
  Heading,
  Highlight,
  Image,
  SimpleGrid,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { date } from "yup";
import { OrderItemType } from "../../api/types";
import StatusComponent from "../StatusComponent";

type OrderListRowItemProps = OrderItemType;

const OrderListRowItem: FunctionComponent<OrderListRowItemProps> = ({
  projectLogo,
  name,
  clientLogo,
  clientName,
  reward,
  dueDate,
  status,
}) => {
  return (
    <SimpleGrid
      gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
      w={"100%"}
      py={"1.2rem"}
      px={"2rem"}
      bg={"white"}
      borderRadius={"1rem"}
    >
      <Flex gap={"2rem"} alignItems={"center"}>
        <Image src={projectLogo} objectFit={"contain"} h={"2rem"} />
        <Heading fontSize={"xl"}>{name}</Heading>
      </Flex>

      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Avatar src={clientLogo} border={"1px solid #d1026a"} />
        <Box>
          <Text fontSize={"0.75rem"} opacity={0.4} fontWeight={500}>
            Client
          </Text>
          <Text fontWeight={500}>{clientName}</Text>
        </Box>
      </Flex>
      <Box>
        <Text fontSize={"0.75rem"} opacity={0.4} fontWeight={500}>
          Total reward
        </Text>
        <Text fontWeight={500} fontSize={"xl"}>
          {reward}
        </Text>
      </Box>
      <Flex alignItems={"center"} gap={"0.5rem"}>
        <Text fontSize={"xl"}>
          {dueDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </Text>
        {(Date.now() - dueDate.getTime()) / 1000 / 60 / 60 / 24 <= 3 &&
          (Date.now() - dueDate.getTime()) / 1000 / 60 / 60 / 24 > 0 && (
            <Tooltip
              bgGradient={"linear(to-r, red.400,pink.400)"}
              color="white"
              label="Seems like due date is coming soon! Make sure to submit your test report"
            >
              <Text color={"pink.400"} fontWeight={700} fontSize={"3xl"}>
                !
              </Text>
            </Tooltip>
          )}
      </Flex>
      <StatusComponent status={status} />
    </SimpleGrid>
  );
};

export default OrderListRowItem;
