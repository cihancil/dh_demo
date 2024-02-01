import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Colors from "../utils/Colors"

export enum ButtonType {
  Default,
  Submit,
}

const Button = ({
  label,
  onPress,
  disabled = false,
  buttonType = ButtonType.Default,
}: {
  label: string
  onPress: () => void,
  disabled?: boolean,
  buttonType?: ButtonType,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[
      styles.container,
      buttonType === ButtonType.Submit ? { backgroundColor: Colors.buttonSuccess } : null,
    ]} disabled={disabled}>
      <Text style={[styles.label, { opacity: disabled ? 0.5 : 1 },]}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    minWidth: 140,
    borderRadius: 10,
    backgroundColor: Colors.button,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 14,
  },
})

export default Button