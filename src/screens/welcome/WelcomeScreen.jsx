import React from 'react'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { styles } from './WelcomeScreen.styles'
import { useNavigation } from '@react-navigation/native'

export const WelcomeScreen = () => {
  const navigation = useNavigation()
  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Screen</Text>
      <TouchableOpacity style={styles.buttonIn} onPress={handleSignIn}>
        <Text style={styles.buttonText}>SignIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonUp} onPress={handleSignUp}>
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
