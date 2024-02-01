import { SafeAreaView, StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native"
import Button from "./Button"

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
  return (
    <SafeAreaView style={style}>
      <View style={styles.background} />
      <View style={styles.innerContainer}>
        <Button label={'<   Önceki Soru'} onPress={onPreviousPress} />
        <Button label={'Sonraki Soru   >'} onPress={onNextPress} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black',
    opacity: 0.3,
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