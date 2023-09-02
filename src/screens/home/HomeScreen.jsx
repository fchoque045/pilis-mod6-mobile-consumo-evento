import { React, useContext, useEffect } from 'react'
import { Text, View, BackHandler } from 'react-native'
import { styles } from '../home/HomeScreen.styles'
import { UserContext } from '../../contexts/UserContext'

import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
  const { currentUser } = useContext(UserContext)
  const navigation = useNavigation()
  useEffect(() => {
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

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen {currentUser.user.fullname}</Text>
    </View>
  )
}
