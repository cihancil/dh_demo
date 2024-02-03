import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import React from "react"
import { StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { hasNotch } from 'react-native-device-info';

interface AnswersDialogProps {
  // onClose: () => void,
  // onAnswersPress: () => void,
  // onSubmitPress: () => void,
}

const AnswersDialog = React.forwardRef<BottomSheetModalMethods, AnswersDialogProps>((props: AnswersDialogProps, ref) => {
  const { height } = useWindowDimensions()
  return (
    <BottomSheetModal
      ref={ref as React.Ref<BottomSheetModalMethods>}
      index={0}
      snapPoints={[height - (hasNotch() ? 60 : 20)]}
      enablePanDownToClose
      backdropComponent={props => (
        <BottomSheetBackdrop {...props}
          opacity={0.5}
          enableTouchThrough={false}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
          style={[styles.backdrop, StyleSheet.absoluteFillObject]} />
      )}
    >
      <View style={styles.container}>
        <Text>asdasdsadas</Text>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  container: {
    flex: 1,
  },
})

export default AnswersDialog