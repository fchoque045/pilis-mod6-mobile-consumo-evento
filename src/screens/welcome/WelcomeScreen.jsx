import { React, useEffect, useContext } from 'react'
import { Text, SafeAreaView, TouchableOpacity, ImageBackground, View } from 'react-native'
import { styles } from './WelcomeScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { getData } from '../../api/storage'
import { UserContext } from '../../contexts/UserContext'

export const WelcomeScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  useEffect(() => {
    getData().then(data => {
      if (data) {
        setCurrentUser(data)
        navigation.navigate('Main')
      }
    }).catch(err => console.warn(err))
  }, [])
  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.roundedContainer}>
        <ImageBackground style={styles.bgImage} source={require('../../../assets/bg.png')}>
          <Text style={styles.title}>
            Consumo
          </Text>
          <Text style={styles.subTitle}>
            en Evento
          </Text>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.buttonIn} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonUp} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
