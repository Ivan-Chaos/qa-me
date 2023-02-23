export type QuestionOptionType = {
  option: string;
  id: string;
};

export type QuestionType = {
  question: string;
  id: string;
  options: QuestionOptionType[];
};
