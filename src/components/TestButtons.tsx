import { SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import Button, { ButtonType } from "./Button"
import { useSelector } from "react-redux"
import { RootState } from "../store"

const TestButtons = ({
  style,
  onPreviousPress,
  onNextPress,
  onSubmitPress,
}: {
  style?: StyleProp<ViewStyle> | undefined
  onPreviousPress: () => void
  onNextPress: () => void
  onSubmitPress: () => void
}) => {
  const test = useSelector((state: RootState) => state.test.test)
  const activeIndex = useSelector((state: RootState) => state.test.activeIndex)
  if (!test) return null
  return (
    <SafeAreaView style={style}>
      <View style={styles.background} />
      <View style={styles.innerContainer}>
        <Button label={'<   Önceki Soru'} onPress={onPreviousPress} disabled={activeIndex === 0} />
        {(test?.questions.length && activeIndex === test?.questions.length - 1)
          ? <Button label={'Bitir'} onPress={onSubmitPress} buttonType={ButtonType.Submit} />
          : <Button label={'Sonraki Soru   >'} onPress={onNextPress} />
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  innerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default TestButtons