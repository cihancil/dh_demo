import { ScrollView, StyleSheet, Text } from "react-native"
import Colors from "../utils/Colors"
import ChoiceView, { ChoiceStatus } from "./ChoiceView"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { testActions } from "../store/testStore"
import { useCallback } from "react"

const TestQuestionView = () => {
  const dispatch = useDispatch()
  const test = useSelector((state: RootState) => state.test.test)
  const activeIndex = useSelector((state: RootState) => state.test.activeIndex)
  const userAnswers = useSelector((state: RootState) => state.test.userAnswers)

  if (!test) return null
  const activeQuestion = test.questions[activeIndex]
  const { description, question, choices } = activeQuestion
  const userAnswerId = userAnswers[activeQuestion.id]

  const renderChoices = useCallback(() => {
    return choices.map((c, i) => {
      const alreadyAnswered = !!userAnswerId
      const selected = userAnswerId === c.id
      let status = ChoiceStatus.Idle
      if (alreadyAnswered && c.id === activeQuestion.correctChoiceId) {
        status = ChoiceStatus.Correct
      } else if (alreadyAnswered && c.id !== activeQuestion.correctChoiceId) {
        status = ChoiceStatus.Wrong
      }
      const handleToggle = () => {
        dispatch(testActions.setAnswer({
          questionId: activeQuestion.id,
          choiceId: c.id
        }))
      }
      return (
        <ChoiceView
          key={c.id}
          index={i}
          choice={c}
          disabled={alreadyAnswered}
          selected={selected}
          status={status}
          onToggle={handleToggle}
        />
      )
    })
  }, [choices, userAnswerId, activeQuestion.id, activeQuestion.correctChoiceId, testActions])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {description && <Text style={styles.description}>
        {description}
      </Text>}
      <Text style={styles.question}>
        {question}
      </Text>
      {renderChoices()}
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

export default TestQuestionView