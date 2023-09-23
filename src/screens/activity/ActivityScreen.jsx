import React, { useContext, useEffect, useState } from 'react'
import { Text, View, SafeAreaView, RefreshControl, FlatList, Pressable } from 'react-native'
import { styles } from './ActivityScreen.styles'
import { getListTransactions } from '../../api/consumo-evento-api'
import { UserContext } from '../../contexts/UserContext'
import { showToastError } from '../../utils/toast'
import moment from 'moment'

export const ActivityScreen = ({ navigation }) => {
  const { currentUser } = useContext(UserContext)
  const [transactions, setTransactions] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    setRefreshing(true)
    refreshTransactions()
    setRefreshing(false)
  }, [])

  const refreshTransactions = () => {
    getListTransactions(currentUser.wallet, currentUser.token).then(data => {
      if (data.message) {
        return showToastError('Algo Salió Mal', data.message)
      }
      setTransactions(data)
      setRefreshing(false)
    }).catch(err => {
      showToastError('Fallo en la Conexion', 'Su Saldo no pudo ser Actualizada')
      console.warn(err)
    })
  }

  const onRefresh = () => {
    setRefreshing(true)
    refreshTransactions()
  }

  const location = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('ActivityDetail', { item })}>
      <View style={styles.cardView}>
        <View style={styles.containerTransaction}>
          <View>
            <Text style={styles.titleBusiness}>{item.business.name}</Text>
            <Text style={styles.titleLocation}>local {item.business.location}</Text>
          </View>
          <View>
            <Text style={styles.titleBusiness}>${item.amount}</Text>
            <Text style={styles.titleLocation}>{moment.utc(item.date).format('DD/MM HH:mm')}hs</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Compras</Text>
      <FlatList
        data={transactions}
        renderItem={location}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  )
}
