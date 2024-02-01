import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../utils/Colors'

interface ProgressBarProps {
  percentage: number
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.bar, {
        flex: percentage,
      }]} />
    </View>
  )
}

export default ProgressBar

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  bar: {
    height: 5,
    backgroundColor: Colors.accent,
    borderRadius: 4,
  },
})
