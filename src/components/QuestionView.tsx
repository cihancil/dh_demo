import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../utils/Colors"
import ProgressBar from "./ProgressBar"
import { TestType } from "../types/TestType"

const QuestionView = ({
  question,
  activeQuestionIndex,
}: {
  question: any,
  activeQuestionIndex: number,
}) => {
  return (
    <View style={styles.container}>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
})

export default QuestionView