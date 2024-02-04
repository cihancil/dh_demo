import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import Button from "../components/Button"
import Colors from "../utils/Colors"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../Navigator"
import { useSelector } from "react-redux"
import { RootState } from "../store"
import { useCallback, useMemo } from "react"

const ResultScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Result'>>()

  const test = useSelector((state: RootState) => state.test.test)
  const userAnswers = useSelector((state: RootState) => state.test.userAnswers)

  const counts = useMemo(() => {
    let countCorrect = 0
    let countEmpty = 0
    let countWrong = 0
    test?.questions.forEach(q => {
      const userChoiceId = userAnswers[q.id]
      if (userChoiceId === null) {
        countEmpty++
      } else if (q.correctChoiceId === userChoiceId) {
        countCorrect++
      } else {
        countWrong++
      }
    })
    return {
      net: Math.max(0, countCorrect - Math.floor(countWrong / 4)),
      correct: countCorrect,
      wrong: countWrong,
      empty: countEmpty,
    }
  }, [test?.questions, userAnswers])

  const handleSubmit = useCallback(() => {
    navigation.pop()
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headerText}>Seviye Belirleme Sınav Sonucu</Text>
          <Image source={require('../../assets/dopi.png')} style={styles.dopi} />
          <Text style={styles.messageText}>Tebrikler, sınavı başarıyla tamamladın!</Text>
          <View style={styles.countRowContainer}>
            <View style={styles.countContainer}>
              <Image source={require('../../assets/count-net.png')} />
              <Text style={styles.countText}>{counts.net + ' Net'}</Text>
            </View>
            <View style={styles.countContainer}>
              <Image source={require('../../assets/count-correct.png')} />
              <Text style={styles.countText}>{counts.correct + ' Doğru'}</Text>
            </View>
            <View style={styles.countContainer}>
              <Image source={require('../../assets/count-wrong.png')} />
              <Text style={styles.countText}>{counts.wrong + ' Yanlış'}</Text>
            </View>
            <View style={styles.countContainer}>
              <Image source={require('../../assets/count-empty.png')} />
              <Text style={styles.countText}>{counts.empty + ' Boş'}</Text>
            </View>
          </View>
        </View>
        <Button label="Üniteye Başla" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: 40,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  topContainer: {
    alignItems: 'center',
    flex: 1,
  },
  countRowContainer: {
    flexDirection: 'row',
  },
  countContainer: {
    alignItems: 'center',
    width: 92,
  },
  headerText: {
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 27,
    color: Colors.text,
  },
  dopi: {
    marginTop: 80,
  },
  messageText: {
    marginTop: 30,
    marginBottom: 50,
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 24,
    color: Colors.text,
  },
  countText: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.text,
  },
})

export default ResultScreen
