import { ChoiceType } from "./ChoiceType"

export type QuestionType = {
  id: string,
  description?: string
  question: string,
  choices: ChoiceType[],
  correctChoiceId: string,
}