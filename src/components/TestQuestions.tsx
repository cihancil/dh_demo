import { ScrollView, StyleSheet, Text, View } from "react-native"
import { TestType } from "../types/TestType"
import Colors from "../utils/Colors"
import ChoiceView from "./ChoiceView"

const TestQuestions = ({
  test,
  activeIndex,
}: {
  test: TestType,
  activeIndex: number,
}) => {
  const activeQuestion = test.questions[activeIndex]
  const { description, question, choices } = activeQuestion
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {description && <Text style={styles.description}>
        {description}
      </Text>}
      <Text style={styles.question}>
        {question}
      </Text>
      {choices.map((c, i) => <ChoiceView key={c.id} index={i} choice={c} selected />)}
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