import { Box, IconButton } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import Slider from "react-slick";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { QuestionType } from "../../features/testerQuestionare/api/types";
import QuestionBox from "../../features/testerQuestionare/components/QuestionBox";
import SubmitScreen from "../../features/testerQuestionare/components/SubmitScreen";

interface TesterQuestionareProps {}

const TesterQuestionare: FunctionComponent<TesterQuestionareProps> = () => {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = { base: "90%", md: "50%" };
  const side = { base: "30%", md: "10px" };

  const [answers, setAnswers] = useState<Map<string, string>>(new Map());

  const mockQuestions: QuestionType[] = [
    {
      id: "1",
      question: "Do you wear wigs?",
      options: [
        {
          id: "1",
          option: "Yes",
        },
        {
          id: "2",
          option: "No",
        },
      ],
    },
    {
      id: "2",
      question: "Have you worn wigs?",
      options: [
        {
          id: "1",
          option: "Yes",
        },
        {
          id: "2",
          option: "No",
        },
        {
          id: "3",
          option: "Maybe",
        },
      ],
    },
    {
      id: "3",
      question: "Will you wear wigs?",
      options: [
        {
          id: "1",
          option: "Maybe",
        },
        {
          id: "2",
          option: "No",
        },
        {
          id: "3",
          option: "Probably?",
        },
      ],
    },
    {
      id: "4",
      question: "When will you wear wigs?",
      options: [
        {
          id: "1",
          option: "Yes",
        },
        {
          id: "2",
          option: "No",
        },
        {
          id: "3",
          option: "Maybe",
        },
      ],
    },
  ];

  const selectOption = (questionId: string, answerId: string) => {
    setAnswers(new Map(answers.set(questionId, answerId)));
  };

  useEffect(() => {
    console.log("🚀 ~ file: index.tsx:108 ~ answers:", answers);
  }, [answers]);

  return (
    <>
      <Box
        borderRadius={"1.5rem"}
        position={"relative"}
        height={"80vh"}
        width={"full"}
        overflow={"hidden"}
        boxShadow={"0px 0px 16px 16px rgba(0, 0, 0, 0.05)"}
      >
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          fontSize={"1.5rem"}
          h={"3rem"}
          w={"3rem"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
        >
          <BiLeftArrowAlt />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          fontSize={"1.5rem"}
          h={"3rem"}
          w={"3rem"}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
          bgGradient="linear(to-r, red.400,pink.400)"
          color={"white"}
          _hover={{
            bgGradient: "linear(to-r, red.400,pink.400)",
            boxShadow: "xl",
          }}
        >
          <BiRightArrowAlt />
        </IconButton>
        <Slider
          dots={true}
          arrows={false}
          infinite={false}
          autoplay={false}
          speed={500}
          autoplaySpeed={5000}
          slidesToShow={1}
          slidesToScroll={1}
          ref={(slider) => setSlider(slider)}
        >
          {mockQuestions.map((question) => (
            <QuestionBox
              key={question.id}
              {...question}
              selectedOptionId={answers.get(question.id)}
              onSelectOption={(optionId) => {
                selectOption(question.id, optionId);
                setTimeout(() => {
                  slider?.slickNext();
                }, 500);
              }}
            />
          ))}
          <SubmitScreen />
        </Slider>
      </Box>
    </>
  );
};

export default TesterQuestionare;
