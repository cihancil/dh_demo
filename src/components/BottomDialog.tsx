import BottomSheet, { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet'
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Colors from '../utils/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types'

const dialogHeight = 240

interface ButtomDialogProps {
  onClose: () => void,
  onAnswersPress: () => void,
  onSubmitPress: () => void,
}

const ButtomDialog = React.forwardRef<BottomSheetMethods, ButtomDialogProps>((props: ButtomDialogProps, ref) => {
  return (
    <BottomSheet
      ref={ref as React.Ref<BottomSheet>}
      index={-1}
      snapPoints={[dialogHeight]}
      backgroundStyle={styles.background}
      enablePanDownToClose
      handleComponent={null}
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
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.touchable} onPress={props.onAnswersPress}>
            <Text style={styles.textAnswers}>Cevap Anahtarı</Text>
          </TouchableOpacity>
          <View style={styles.seperator} />
          <TouchableOpacity style={styles.touchable} onPress={props.onSubmitPress}>
            <Text style={styles.textSubmit}>Testi Bitir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.touchable} onPress={props.onClose}>
            <Text style={styles.textCancel}>Vazgec</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet >
  )
})

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  container: {
    height: dialogHeight,
    paddingHorizontal: 16,
  },
  topContainer: {
    height: 123,
    backgroundColor: Colors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  bottomContainer: {
    marginTop: 10,
    height: 61,
    backgroundColor: Colors.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'stretch',
  },
  seperator: {
    height: 1,
    backgroundColor: Colors.lightBackground,
  },
  touchable: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAnswers: {
    fontWeight: '400',
    fontSize: 18,
    color: Colors.text,
  },
  textSubmit: {
    fontWeight: '400',
    fontSize: 18,
    color: Colors.alert,
  },
  textCancel: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.text,
  },
})

export default ButtomDialog