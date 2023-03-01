import { Box, VStack } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { OrderItemType } from "../../api/types";
import OrderListRowItem from "../OrderListRowItem";
import TableHeader from "../TableHeader";

interface ClearOrderListProps {}

const ClearOrderList: FunctionComponent<ClearOrderListProps> = () => {
  const orderData: OrderItemType[] = [
    {
      projectLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Kiss_Logo.svg/2560px-Kiss_Logo.svg.png",
      clientId: "2e12d12",
      clientLogo:
        "https://m.media-amazon.com/images/M/MV5BZGRjZTczNWItMDk3NS00YmI0LTlmOTktYTQ4ZWQ1MzI1NmRhXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_.jpg",
      clientName: "Billy Herrington Inc",
      dueDate: new Date(),
      name: "Your ass test",
      reward: "5 гривень",
      status: "RESULT_REJECTED",
    },
  ];

  return (
    <Box>
      <TableHeader />
      <VStack>
        {orderData.map((order) => {
          return <OrderListRowItem {...order} />;
        })}
      </VStack>
    </Box>
  );
};

export default ClearOrderList;
