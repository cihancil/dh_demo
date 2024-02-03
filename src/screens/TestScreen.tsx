import { ActivityIndicator, SafeAreaView, StyleSheet, View } from "react-native"
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import React, { useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'

import useTestData from "../query/useTestData"
import { testActions } from "../store/testStore"
import { RootState } from "../store"
import TestHeader from "../components/TestHeader"
import Colors from "../utils/Colors"
import TestButtons from "../components/TestButtons"
import TestQuestions from "../components/TestQuestions"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../Navigator"
import ButtomDialog from "../components/BottomDialog"
import AnswersDialog from "../components/AnswersDialog"

const TestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Test'>>()
  const bottomDialogRef = useRef<BottomSheet>(null)
  const answersDialogRef = useRef<BottomSheet>(null)

  const dispatch = useDispatch()
  const { data: testData } = useTestData()
  const test = useSelector((state: RootState) => state.test.test)
  const activeIndex = useSelector((state: RootState) => state.test.activeIndex)

  useEffect(() => {
    if (testData) {
      dispatch(testActions.setTestData({
        testData: testData,
      }))
    }
  }, [dispatch, testData])

  return (
    <View style={styles.container}>
      <TestHeader test={test} activeIndex={activeIndex} onMenuPress={() => {
        bottomDialogRef.current?.snapToIndex(0)
      }} />
      {!test && <View style={styles.indicatorContainer}>
        <ActivityIndicator color={Colors.white} />
      </View>}
      <TestQuestions />
      <TestButtons
        onPreviousPress={() => {
          dispatch(testActions.navigatePrevious())
        }}
        onNextPress={() => {
          dispatch(testActions.navigateNext())
        }}
        onSubmitPress={() => {
          navigation.push('Result')
        }}
        style={styles.testButtons} />
      <AnswersDialog ref={answersDialogRef} />
      <ButtomDialog
        ref={bottomDialogRef}
        onClose={() => {
          bottomDialogRef.current?.close()
        }}
        onAnswersPress={() => {
          bottomDialogRef.current?.close()
          answersDialogRef?.current?.snapToIndex(0)
        }}
        onSubmitPress={() => {
          bottomDialogRef.current?.close()
          navigation.push('Result')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackground,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  indicatorContainer: {
    marginTop: 100,
  },
  testButtons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
})

export default TestScreen