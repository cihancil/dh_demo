import { BottomSheetBackdrop, BottomSheetBackdropProps, BottomSheetModal } from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import React, { useCallback, useMemo } from "react"
import { FlatList, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { hasNotch } from 'react-native-device-info'
import Colors from '../utils/Colors'
import { useSelector } from 'react-redux'
import { RootState } from '../store'
import AnswerItem from './AnswerItem'
import { QuestionType } from '../types/QuestionType'
interface AnswersDialogProps { }

const AnswersDialog = React.forwardRef<BottomSheetModalMethods, AnswersDialogProps>((props: AnswersDialogProps, ref) => {
  const { height } = useWindowDimensions()
  const userAnswers = useSelector((state: RootState) => state.test.userAnswers)
  const test = useSelector((state: RootState) => state.test.test)

  const renderBackdropComponent = useCallback((props: BottomSheetBackdropProps) => {
    return <BottomSheetBackdrop {...props}
      opacity={0.5}
      enableTouchThrough={false}
      appearsOnIndex={0}
      disappearsOnIndex={-1}
      style={styles.backdrop} />
  }, [])

  const snapPoints = useMemo(() => {
    return [height - (hasNotch() ? 60 : 20)]
  }, [height, hasNotch])

  const renderListItem = useCallback(({ item, index }: { item: QuestionType, index: number }) => {
    const correctChoiceIndex = item.choices.findIndex(c => c.id === item.correctChoiceId)
    const userChoiceIndex = item.choices.findIndex(c => c.id === userAnswers[item.id])
    return (
      <AnswerItem
        key={item.id}
        questionId={item.id}
        questionNumber={index + 1}
        correctChoiceIndex={correctChoiceIndex}
        userChoiceIndex={userChoiceIndex}
      />
    )
  }, [userAnswers])

  const renderItemSeperator = useCallback(() => {
    return <View style={styles.seperator} />
  }, [])

  return (
    <BottomSheetModal
      ref={ref as React.Ref<BottomSheetModalMethods>}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      handleStyle={styles.handle}
      handleIndicatorStyle={styles.handleIndicator}
      backdropComponent={renderBackdropComponent}
    >
      <View style={styles.container}>
        <View style={styles.listHeader}>
          <Image source={require('../../assets/ders.png')} style={styles.icon} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.textTitle}>{test?.title}</Text>
            <Text style={styles.textCount}>{(test?.questions.length || 0) + ' Soru'}</Text>
          </View>
        </View>
        <FlatList
          data={test?.questions}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={renderItemSeperator}
          renderItem={renderListItem}
        />
      </View >
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    ...StyleSheet.absoluteFillObject
  },
  handle: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: Colors.background,
    height: 50,
  },
  handleIndicator: {
    backgroundColor: Colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  listContent: {
    paddingHorizontal: 15,
    paddingBottom: 18,
  },
  seperator: { height: 4 },
  listHeader: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 18,
  },
  icon: {
    width: 48, height: 48,
  },
  headerTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  textTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22,
    color: Colors.text,
  },
  textCount: {
    fontWeight: '400',
    fontSize: 12,
    color: Colors.lightText,
  },
})

export default AnswersDialog