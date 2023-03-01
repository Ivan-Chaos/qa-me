import { Heading, SimpleGrid } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface TableHeaderProps {}

const TableHeader: FunctionComponent<TableHeaderProps> = () => {
  return (
    <SimpleGrid
      gridTemplateColumns={"1fr 1fr 1fr 1fr 1fr"}
      w={"100%"}
      py={"1.2rem"}
      px={"2rem"}
      borderBottom={"1px solid gray"}
      mb={"1rem"}
    >
      <Heading fontSize={"2xl"}>Project</Heading>
      <Heading fontSize={"2xl"}>Client</Heading>
      <Heading fontSize={"2xl"}>Reward</Heading>
      <Heading fontSize={'2xl'}>Due date</Heading>
      <Heading fontSize={'2xl'}>Order status</Heading>
    </SimpleGrid>
  );
};

export default TableHeader;
