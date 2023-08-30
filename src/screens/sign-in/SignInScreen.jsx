import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { styles } from '../sign-in/SignInScreen.styles'
import { useNavigation } from '@react-navigation/native'

export const SignInScreen = () => {
  const navigation = useNavigation()
  const handleLogIn = () => {
    navigation.navigate('Main')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignIn Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogIn}>
        <Text style={styles.buttonText}>LogIn</Text>
      </TouchableOpacity>
    </View>
  )
}
