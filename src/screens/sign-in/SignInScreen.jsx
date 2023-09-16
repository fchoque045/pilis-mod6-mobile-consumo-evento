import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, TextInput, ScrollView } from 'react-native'
import { styles } from '../sign-in/SignInScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { signIn, getUser, getWalletUser } from '../../api/consumo-evento-api'
import Toast from 'react-native-toast-message'
import { showToastError } from '../../utils/toast'
import { UserContext } from '../../contexts/UserContext'
import { useForm, Controller } from 'react-hook-form'
import jwtDecode from 'jwt-decode'
import { storeData } from '../../api/storage'
import { Loading } from '../../components/loading-indicator/Loading'

export const SignInScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const handleLogIn = async ({ email, password }) => {
    setVisible(true)
    signIn(email, password).then(data => {
      if (data.credentials) {
        const token = data.credentials.token
        const decodedToken = jwtDecode(token)
        getUser(decodedToken.id, token).then(data => {
          if (data.role === 'client') {
            const save_data = {user: data, token }
            getWalletUser(data.id, token).then(data => {
              setCurrentUser({ ...save_data, wallet: data.id})
              storeData({ ...save_data, wallet: data.id})
              navigation.navigate('Main')
              reset()
            }).catch(err => console.warn(err))
          } else {
            return showToastError('Algo Salio Mal', 'Usuario sin acceso')
          }
          setVisible(false)
        }).catch(err => console.warn(err))
      } else {
        showToastError('Autenticacion Fallida', data.message)
      }
      setVisible(false)
    }).catch(err => console.warn(err))
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/bg.png')}>
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <Text style={styles.title}>Inicia Sesión</Text>
            <Text style={styles.subTitle}>Correo Electrónico</Text>
            <View style={styles.inputContainer}>
              <Ionicons name='at-sharp' size={20} color={COLORS.primary} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Ingrese su Email'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize='none'
                  />
                )}
                name='email'
                rules={{ required: 'El email es requerido' }}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Text style={styles.subTitle}>Contraseña</Text>
            <View style={styles.inputContainer}>
              <Ionicons name='lock-closed-outline' size={20} color={COLORS.primary} />
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    placeholder='Ingrese su Contraseña'
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name='password'
                rules={{ required: 'El password es requerido' }}
              />
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogIn)} disabled={visible}>
              {!visible ? <Text style={styles.buttonText}>Acceder</Text> : <Loading />}
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Toast />
      </ImageBackground>
    </SafeAreaView>
  )
}
