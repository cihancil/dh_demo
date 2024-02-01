import { QuestionType } from "./QuestionType";

export type TestType = {
  title: string,
  description: string,
  questions: QuestionType[],
}