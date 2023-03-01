import { Box, Center, Flex } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface ToggleComponentProps {
  items: string[];
  itemIndex: number;
  setItemIndex(itemIndex: number): void;
}

const ToggleComponent: FunctionComponent<ToggleComponentProps> = ({
  items,
  itemIndex,
  setItemIndex,
}) => {
  return (
    <Flex
      borderRadius={"0.5rem"}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"pink.400"}
    >
      {items.map((item, index) => {
        return (
          <Center
            transition={"all 0.4s"}
            textTransform={"capitalize"}
            px={"1rem"}
            bg={index === itemIndex ? " pink.400" : ""}
            color={index === itemIndex ? "white" : ""}
            cursor={"pointer"}
            fontWeight={index === itemIndex ? 700 : 300}
            onClick={() => setItemIndex(index)}
          >
            {item}
          </Center>
        );
      })}
    </Flex>
  );
};

export default ToggleComponent;
