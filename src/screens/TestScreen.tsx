import { StyleSheet, Text, View } from "react-native"
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from "react"

const TestScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const bottomSheetRef2 = useRef<BottomSheet>(null)

  const snapPoints = useMemo(() => ['10%', '100%'], [])

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, [])

  const actionSheetRef = useRef()
  useEffect(() => {
  }, [])

  return (
    <View style={styles.container}>
      <Text>TestScreen</Text>
      {/* <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose
        handleStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        backdropComponent={props => (<BottomSheetBackdrop {...props}
          opacity={0.5}
          enableTouchThrough={false}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          style={[{ backgroundColor: 'rgba(0, 0, 0, 1)' }, StyleSheet.absoluteFillObject]} />)}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet> */}

      <BottomSheet
        ref={bottomSheetRef2}
        index={0}
        snapPoints={['30%']}
        backgroundStyle={{
          backgroundColor: 'transparent',
        }}
        onChange={handleSheetChanges}
        enablePanDownToClose
        handleComponent={null}
        backdropComponent={props => (<BottomSheetBackdrop {...props}
          opacity={0.5}
          enableTouchThrough={false}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          style={[{ backgroundColor: 'rgba(0, 0, 0, 1)' }, StyleSheet.absoluteFillObject]} />)}
      >
        <View style={{
          height: 200,
          paddingHorizontal: 16,
        }}>
          <View style={{
            height: 100,
            backgroundColor: 'white',
          }}>
            <Text>Awesome 🎉</Text>
          </View>
        </View>
      </BottomSheet>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'red',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
})

export default TestScreen