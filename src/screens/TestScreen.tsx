import { ActivityIndicator, StyleSheet, View } from "react-native"
import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet'
import React, { useCallback, useEffect, useRef } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"

import useTestData from "../query/useTestData"
import { testActions } from "../store/testStore"
import { RootState } from "../store"
import TestHeader from "../components/TestHeader"
import Colors from "../utils/Colors"
import TestButtons from "../components/TestButtons"
import TestQuestionView from "../components/TestQuestionView"
import { RootStackParamList } from "../Navigator"
import ButtomDialog from "../components/BottomDialog"
import AnswersDialog from "../components/AnswersDialog"

const TestScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Test'>>()
  const bottomDialogRef = useRef<BottomSheet>(null)
  const answersDialogRef = useRef<BottomSheetModal>(null)

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

  const handleMenuPress = useCallback(() => {
    bottomDialogRef.current?.snapToIndex(0)
  }, [bottomDialogRef.current])

  const handlePreviousPress = useCallback(() => {
    dispatch(testActions.navigatePrevious())
  }, [dispatch, testActions])

  const handleNextPress = useCallback(() => {
    dispatch(testActions.navigateNext())
  }, [dispatch, testActions])

  const handleButtonsSubmitPress = useCallback(() => {
    navigation.push('Result')
  }, [navigation])

  const handleButtomDialogClose = useCallback(() => {
    bottomDialogRef.current?.close()
  }, [bottomDialogRef.current])

  const handleButtomDialogAnswersPress = useCallback(() => {
    bottomDialogRef.current?.close()
    answersDialogRef?.current?.present()
  }, [bottomDialogRef.current, answersDialogRef?.current])

  const handleButtomDialogSubmitPress = useCallback(() => {
    bottomDialogRef.current?.close()
    navigation.push('Result')
  }, [bottomDialogRef.current, navigation])

  return (
    <View style={styles.container}>
      <TestHeader test={test} activeIndex={activeIndex} onMenuPress={handleMenuPress} />
      {
        !test &&
        <View style={styles.indicatorContainer}>
          <ActivityIndicator color={Colors.white} />
        </View>
      }
      <TestQuestionView />
      <TestButtons
        onPreviousPress={handlePreviousPress}
        onNextPress={handleNextPress}
        onSubmitPress={handleButtonsSubmitPress}
        style={styles.testButtons} />
      <AnswersDialog ref={answersDialogRef} />
      <ButtomDialog
        ref={bottomDialogRef}
        onClose={handleButtomDialogClose}
        onAnswersPress={handleButtomDialogAnswersPress}
        onSubmitPress={handleButtomDialogSubmitPress}
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