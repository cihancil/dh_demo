import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Colors from "../utils/Colors"
import ProgressBar from "./ProgressBar"
import { TestType } from "../types/TestType"

const TestHeader = ({
  test,
  activeIndex,
  onMenuPress,
}: {
  test: TestType | null,
  activeIndex: number,
  onMenuPress: () => void,
}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../../assets/arrow-left.png')} />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{test?.title}</Text>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={onMenuPress}>
            <Image source={require('../../assets/more-horizontal.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.headerBottom}>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{test?.description}</Text>
            {test && <Text style={styles.counts}>{activeIndex + 1}/{test!.questions.length}</Text>}
          </View>
          {test && <ProgressBar percentage={(activeIndex + 1) / test!.questions.length} />}
        </View>


      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 10,
  },
  headerBottom: {
    minHeight: 31,
    justifyContent: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.lightBackground,
    borderRadius: 10,
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: Colors.text,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  description: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.text,
  },
  counts: {
    fontWeight: '600',
    fontSize: 13,
    color: Colors.accent,
  },
})

export default TestHeader