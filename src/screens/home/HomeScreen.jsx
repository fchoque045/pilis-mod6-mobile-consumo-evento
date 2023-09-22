import { React, useContext, useEffect, useState } from 'react'
import { Text, View, BackHandler, SafeAreaView, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { styles } from '../home/HomeScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import { getWalletUser, putWalletCode } from '../../api/consumo-evento-api'
import Toast from 'react-native-toast-message'
import { showToastError } from '../../utils/toast'
import moment from 'moment'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../utils/theme'

export const HomeScreen = () => {
  const { currentUser } = useContext(UserContext)
  const [wallet, setWallet] = useState({ balance: 0, code: 0 })
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const [showBalance, setShowBalance] = useState(true)
  const navigation = useNavigation()
  useEffect(() => {
    fetchWallet()
    const backAction = () => {
      if (navigation.isFocused()) {
        BackHandler.exitApp()
        return true
      }
      return false
    }
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backHandler.remove()
  }, [])
  const fetchWallet = () => {
    setRefreshing(true)
    getWalletUser(currentUser.user.id, currentUser.token).then(data => {
      if (data.message) {
        return showToastError('Algo Salió Mal', data.message)
      }
      setWallet(data)
      setRefreshing(false)
    }).catch(err => {
      showToastError('Fallo en la Conexion', 'Su Saldo no pudo ser Actualizada')
      setRefreshing(false)
      console.warn(err)
    })
  }
  const onRefresh = () => {
    setRefreshing(true)
    fetchWallet()
  }
  const handleNuevoCode = () => {
    putWalletCode(wallet.id, currentUser.token).then(data => {
      if (data.message) {
        return showToastError('Algo Salió Mal', data.message)
      }
      setMinutes(0)
      setSeconds(0)
      setWallet((prev) => ({
        ...prev,
        code: data.code,
        expAt: data.expAt
      }))
      const minLocal = moment().format('mm')
      const fechaExp = new Date(data.expAt)
      const minExp = fechaExp.getMinutes()
      setMinutes(minExp - minLocal)
    }).catch(err => console.warn(err))
  }
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          return clearInterval(interval)
        } else {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      } else {
        setSeconds(seconds - 1)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [seconds, minutes])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      >
        <View style={styles.cardView}>
          <View style={styles.containerProfile}>
            <Image source={require('../../../assets/user_log.png')} style={styles.profileImage} />
            <View>
              <Text style={styles.title}>Bienvenido!</Text>
              <Text style={styles.subTitle}>{currentUser.user.fullname}</Text>
            </View>
          </View>
        </View>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 0.5, y: 1 }}
          locations={[0.8, 1]}
          colors={['#EBF3CE', COLORS.inactivePri]}
          style={[styles.cardView, styles.walletSaldo]}
        >
          <Text style={styles.titleSaldo}>Saldo</Text>
          <TouchableOpacity onPress={() => setShowBalance(!showBalance)}>
            {showBalance
              ? <Text style={styles.subTitleSaldo}>${wallet.balance}</Text>
              : <Text style={styles.subTitleSaldo}>$******</Text>}
          </TouchableOpacity>
        </LinearGradient>
        <View style={[styles.cardView, styles.containerWallet]}>
          <View style={styles.walletCode}>
            <Text style={styles.titleCode}>{wallet.code}</Text>
            <Text style={styles.subTitleCode}>
              {minutes === 0 && seconds === 0
                ? <Text style={[styles.subTitleCode, styles.subRedTitleCode]}>Codigo expirado: </Text>
                : 'Tu codigo expira en: '}
              <Text style={styles.minuteCode}>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</Text>
            </Text>
            <TouchableOpacity style={styles.button} onPress={handleNuevoCode}>
              <Text style={styles.buttonText}>Nuevo codigo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  )
}
