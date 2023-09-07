import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { COLORS } from '../../utils/theme'

export const Loading = () => {
  return (
    <View>
      <ActivityIndicator style={styles.horizontal} color={COLORS.white} />
    </View>
  )
}

const styles = StyleSheet.create({
  horizontal: {
    padding: 2
  }
})
