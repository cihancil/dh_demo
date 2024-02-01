import { StyleSheet, Text, View } from "react-native"
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { useCallback, useEffect, useMemo, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'

import useTestData from "../query/useTestData"
import { testActions } from "../stores/testStore"
import { RootState } from "../stores"

const TestScreen = () => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const bottomSheetRef2 = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['10%', '100%'], [])
  const actionSheetRef = useRef()
  const handleSheetChanges = useCallback((index: number) => {
  }, [])

  const dispatch = useDispatch()
  const { data: testData } = useTestData()
  const test = useSelector((state: RootState) => state.test.test)


  useEffect(() => {
    if (testData) {
      dispatch(testActions.setTestData({
        testData: testData,
      }))
    }
  }, [dispatch, testData])

  return (
    <View style={styles.container}>
      <Text>TestScreen {test?.title}</Text>
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