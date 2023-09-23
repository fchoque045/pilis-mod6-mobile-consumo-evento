import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, SafeAreaView, ImageBackground, TextInput, ScrollView } from 'react-native'
import { styles } from '../sign-up/SignUpScreen.styles'
import { signUp, getUser } from '../../api/consumo-evento-api'
import Toast from 'react-native-toast-message'
import { showToastError } from '../../utils/toast'
import { useNavigation } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import { useForm, Controller } from 'react-hook-form'
import jwtDecode from 'jwt-decode'
import { storeData } from '../../api/storage'
import { Loading } from '../../components/loading-indicator/Loading'

export const SignUpScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const [visible, setVisible] = useState(false)
  const { control, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      fullname: '',
      dni: '',
      email: '',
      password: ''
    }
  })
  const handleLogUp = async ({ fullname, dni, email, password }) => {
    setVisible(true)
    const user = {
      fullname,
      dni: parseInt(dni),
      email,
      password,
      role: 'client'
    }
    signUp(user).then(data => {
      if (data.credentials) {
        const token = data.credentials.token
        const decodedToken = jwtDecode(token)
        getUser(decodedToken.id, token).then(data => {
          setCurrentUser({ user: data, token })
          storeData({ user: data, token })
          navigation.navigate('Main')
          reset()
        }).catch(err => console.warn(err))
      } else {
        showToastError('Algo Salio Mal', data.message)
      }
      setVisible(false)
    }).catch(err => console.warn(err))
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/bg.png')}>
        <ScrollView style={styles.scroll}>
          <View style={styles.card}>
            <Text style={styles.title}>Create una Nueva Cuenta</Text>
            <Text style={styles.subTitle}>Nombre Completo</Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='Ingrese su nombre completo'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name='fullname'
                rules={{ required: 'Su Nombre es requerido' }}
              />
            </View>
            {errors.fullname && <Text style={styles.errorText}>{errors.fullname.message}</Text>}
            <Text style={styles.subTitle}>DNI</Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='Ingrese su DNI'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType='numeric'
                  />
                )}
                name='dni'
                rules={{ required: 'Su DNI es requerido' }}
              />
            </View>
            {errors.dni && <Text style={styles.errorText}>{errors.dni.message}</Text>}
            <Text style={styles.subTitle}>Correo Electrónico</Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='Ingresar su correo electrónico'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    autoCapitalize='none'
                  />
                )}
                name='email'
                rules={{ required: 'Su Correo es requerido' }}
              />
            </View>
            {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
            <Text style={styles.subTitle}>Contraseña</Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder='Ingrese su Contraseña'
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry
                  />
                )}
                name='password'
                rules={{ required: 'La Contraseña es requerida' }}
              />
            </View>
            {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogUp)} disabled={visible}>
              {!visible ? <Text style={styles.buttonText}>Crear Cuenta</Text> : <Loading />}
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Toast />
      </ImageBackground>
    </SafeAreaView>
  )
}
