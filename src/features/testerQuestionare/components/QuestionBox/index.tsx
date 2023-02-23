import { Center, Flex, Heading, VStack, Text } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { QuestionType } from "../../api/types";

interface QuestionBoxProps extends QuestionType {
  selectedOptionId?: string;
  onSelectOption(optionId: string): void;
}

const QuestionBox: FunctionComponent<QuestionBoxProps> = ({
  question,
  options,
  selectedOptionId,
  onSelectOption,
}) => {
  return (
    <VStack bg={"white"} h={"80vh"} pt={"15rem"}>
      <Heading mb={"1rem"} fontWeight={700}>
        {question}
      </Heading>
      <VStack>
        {options.map((option, index) => {
          return (
            <Flex
              width={"40rem"}
              bg={
                selectedOptionId === option.id
                  ? "linear-gradient(90deg, rgba(255,92,92,1) 0%, rgba(255,124,189,1) 100%)"
                  : "gray.100"
              }
              px={"1rem"}
              py={"1rem"}
              borderRadius={"0.5rem"}
              onClick={() => onSelectOption(option.id)}
              alignItems={"center"}
              cursor={"pointer"}
              color={selectedOptionId === option.id ? "white" : ""}
              transition={"0.3s ease-out"}
              fontWeight={selectedOptionId === option.id ? 700 : 400}
              transform={selectedOptionId === option.id ? "scale(1.01)" : ""}
            >
              <Center
                mr={"1rem"}
                borderRadius={"6px"}
                border={"1px solid rgba(0, 0, 0, 0.1)"}
                borderColor={
                  selectedOptionId === option.id
                    ? "rgba(255, 255, 255, 0.5)"
                    : ""
                }
                w={"2rem"}
                h={"2rem"}
                fontWeight={700}
                opacity={selectedOptionId === option.id ? 1 : 0.4}
              >
                {String.fromCharCode(65 + index)}
              </Center>
              <Text>{option.option}</Text>
            </Flex>
          );
        })}
      </VStack>
    </VStack>
  );
};

export default QuestionBox;
