import { StyleSheet, Text, View } from "react-native"
import Colors from "../utils/Colors"
import { memo } from "react"

const AnswerItem = memo(function AnswerItem({
  questionNumber,
  correctChoiceIndex,
  userChoiceIndex,
  questionId,
}: {
  questionNumber: number,
  correctChoiceIndex: number,
  userChoiceIndex: number,
  questionId: string,
}) {
  const userAnsweredCorrect = correctChoiceIndex === userChoiceIndex
  return (
    <View style={styles.container}>
      <Text style={styles.textCount}>{`${questionNumber}. Soru`}</Text>
      <View style={styles.choicesContainer}>
        {['A', 'B', 'C', 'D', 'E'].map((choice, index) => {
          const usersAnswer = userChoiceIndex === index
          const markAsWrong = usersAnswer && !userAnsweredCorrect
          const markAsCorrect = (userChoiceIndex !== -1) && !userAnsweredCorrect && (index === correctChoiceIndex)
          const color = markAsCorrect
            ? Colors.buttonSuccess
            : markAsWrong
              ? Colors.alert
              : usersAnswer
                ? Colors.button :
                null
          return (
            <View key={`question_${questionId}_choice_${choice}`} style={[styles.choiceContainer, {
              backgroundColor: color || 'transparent',
              borderColor: color || Colors.lightBackground,
            }]}>
              <Text style={styles.textChoice}>{choice}</Text>
            </View>
          )
        })}
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: Colors.listItemBackground,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  choicesContainer: {
    marginLeft: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  choiceContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCount: {
    color: Colors.lightText,
    fontSize: 14,
    fontWeight: '600',
  },
  textChoice: {
    color: Colors.lightText,
    fontSize: 16,
    fontWeight: '700',
  },
})

export default AnswerItem