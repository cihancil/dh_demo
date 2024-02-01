import { StyleSheet, Text } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Colors from "../utils/Colors"

const Button = ({
  label,
  onPress,
}: {
  label: string
  onPress: () => void,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.label}>
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