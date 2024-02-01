import { StyleSheet, Text, View } from "react-native"

import { ChoiceType } from "../types/ChoiceType"
import Colors from "../utils/Colors"
import { TouchableOpacity } from "react-native-gesture-handler"

export enum ChoiceStatus {
  Idle,
  Correct,
  Wrong,
}

const ChoiceView = ({
  choice,
  index,
  selected,
  disabled,
  onToggle,
  status = ChoiceStatus.Idle,
}: {
  choice: ChoiceType,
  index: number,
  selected: boolean,
  disabled: boolean,
  onToggle: () => void,
  status: ChoiceStatus,
}) => {
  return (
    <View style={[styles.container,
    (status === ChoiceStatus.Correct) ? {
      backgroundColor: 'green',
    } : (selected && status === ChoiceStatus.Wrong) ? { backgroundColor: 'red', } : null]}>
      <TouchableOpacity
        onPress={onToggle}
        disabled={disabled}
        style={styles.radioContainer}
        hitSlop={{ left: 16, right: 16, top: 16, bottom: 16 }}>
        <View style={styles.radioOuter}>
          {selected && <View style={styles.radioMiddle} />}
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>
        {_getChoiceByIndex(index) + choice.text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Colors.background,
    marginBottom: 10,
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    color: Colors.text,
    flex: 1,
  },
  radioContainer: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignContent: 'center',
  },
  radioOuter: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: Colors.text,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  radioMiddle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.text,
    alignSelf: 'center',
  }
})

const _getChoiceByIndex = (index: number) => {
  switch (index) {
    case 0:
      return 'A) '
    case 1:
      return 'B) '
    case 2:
      return 'C) '
    case 3:
      return 'D) '
    case 4:
      return 'E) '
    default:
      return ''
  }

}

export default ChoiceView