import { ScrollView, StyleSheet, Text, View } from "react-native"
import { TestType } from "../types/TestType"
import Colors from "../utils/Colors"
import ChoiceView, { ChoiceStatus } from "./ChoiceView"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { testActions } from "../store/testStore"

const TestQuestions = () => {
  const dispatch = useDispatch()
  const test = useSelector((state: RootState) => state.test.test)
  const activeIndex = useSelector((state: RootState) => state.test.activeIndex)
  const userAnswers = useSelector((state: RootState) => state.test.userAnswers)

  if (!test) return null
  const activeQuestion = test.questions[activeIndex]
  const { description, question, choices } = activeQuestion
  const userAnswerId = userAnswers[activeQuestion.id]
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {description && <Text style={styles.description}>
        {description}
      </Text>}
      <Text style={styles.question}>
        {question}
      </Text>
      {choices.map((c, i) => {
        const alreadyAnswered = !!userAnswerId
        const selected = userAnswerId === c.id
        let status = ChoiceStatus.Idle
        if (alreadyAnswered && c.id === activeQuestion.correctChoiceId) {
          status = ChoiceStatus.Correct
        } else if (alreadyAnswered && c.id !== activeQuestion.correctChoiceId) {
          status = ChoiceStatus.Wrong
        }
        return (
          <ChoiceView
            key={c.id}
            index={i}
            choice={c}
            disabled={alreadyAnswered}
            selected={selected}
            status={status}
            onToggle={() => {
              dispatch(testActions.setAnswer({
                questionId: activeQuestion.id,
                choiceId: c.id
              }))
            }}
          />
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 110,
  },
  description: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 28,
    marginBottom: 30,
    color: Colors.text,
  },
  question: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 28,
    color: Colors.text,
    marginBottom: 20,
  },
})

export default TestQuestions