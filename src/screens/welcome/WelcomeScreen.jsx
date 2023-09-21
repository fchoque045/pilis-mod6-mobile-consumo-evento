import { React, useEffect, useContext } from 'react'
import { Text, SafeAreaView, TouchableOpacity, ImageBackground, View } from 'react-native'
import { styles } from './WelcomeScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { getData } from '../../api/storage'
import { UserContext } from '../../contexts/UserContext'
import jwtDecode from 'jwt-decode'

export const WelcomeScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  useEffect(() => {
    getData().then(data => {
      if (data && checkDataToken(data)) {
        setCurrentUser(data)
        navigation.navigate('Main')
      } else {
        navigation.navigate('Welcome')
      }
    }).catch(err => console.warn(err))
  }, [])
  const handleSignIn = () => {
    navigation.navigate('SignIn')
  }
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }
  const checkDataToken = (data) => {
    const fechaActual = new Date()
    const timestampActual = Math.floor(fechaActual.getTime() / 1000)
    const decodedToken = jwtDecode(data.token)
    if (timestampActual < decodedToken.exp) {
      return true
    } else {
      return false
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.roundedContainer}>
        <ImageBackground style={styles.bgImage} source={require('../../../assets/bg.png')}>
          <Text style={styles.title}>
            ¡Te damos la bienvenida a
          </Text>
          <Text style={styles.subTitle}>
            GoEvent!
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
