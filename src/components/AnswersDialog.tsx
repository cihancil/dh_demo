import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import React from "react"
import { SafeAreaView, SafeAreaViewBase, SafeAreaViewComponent, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import Colors from '../utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
interface AnswersDialogProps {
  // onClose: () => void,
  // onAnswersPress: () => void,
  // onSubmitPress: () => void,
}

const AnswersDialog = React.forwardRef<BottomSheetMethods, AnswersDialogProps>((props: AnswersDialogProps, ref) => {
  const { height } = useWindowDimensions()
  return (
    <BottomSheet
      ref={ref as React.Ref<BottomSheetMethods>}
      index={-1}
      // snapPoints={[height - statusBarHeight]}
      snapPoints={['100%']}
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
    </BottomSheet>
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