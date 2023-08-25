import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './BusinessListScreen.styles'
import { useNavigation } from '@react-navigation/native'

export const BusinessListScreen = () => {
  const navigation = useNavigation()
  const handle = () => {
    navigation.navigate('BusinessDetail')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>BusinessList Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handle}>
        <Text style={styles.buttonText}>Test</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
