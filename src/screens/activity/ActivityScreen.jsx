import React, { useContext, useEffect, useState } from 'react'
import { Text, View, SafeAreaView, ScrollView, RefreshControl, FlatList } from 'react-native'
import { styles } from './ActivityScreen.styles'
import { getListTransactions } from '../../api/consumo-evento-api'
import { UserContext } from '../../contexts/UserContext'
import { showToastError } from '../../utils/toast'
import moment from 'moment'

export const ActivityScreen = () => {

  const {currentUser} = useContext(UserContext)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    getListTransactions(currentUser.wallet, currentUser.token).then(data => {
      if (data.message) {
        return showToastError('Algo Salió Mal', data.message)
      }
      data.map((t) => {
        t.date = dateFormated(t.date)
      })
      setTransactions(data)
    }).catch(err => {
      showToastError('Fallo en la Conexion', 'Su Saldo no pudo ser Actualizada')
      console.warn(err)
    })
  }, [])

  const dateFormated = (date_string) => {
    const date = moment(date_string);
    const dateFormated = date.format('YYYY-MM-DD');

    return dateFormated
  }
  // const fetchWallet = () => {
  //   getWalletUser(currentUser.user.id, currentUser.token).then(data => {
  //     if (data.message) {
  //       return showToastError('Algo Salió Mal', data.message)
  //     }
  //     setWallet(data)
  //     setRefreshing(false)
  //   }).catch(err => {
  //     showToastError('Fallo en la Conexion', 'Su Saldo no pudo ser Actualizada')
  //     setRefreshing(false)
  //     console.warn(err)
  //   })
  // }

  const location = ({ item }) => (
    <View style={styles.cardView}>
        <View style={styles.containerTransaction}>
          <View>
            <Text style={styles.titleBusiness}>{item.business.name}</Text>
            <Text style={styles.titleLocation}>local {item.business.location}</Text>
          </View>
          <View>
            <Text style={styles.titleBusiness}>${item.amount}</Text>
            <Text style={styles.titleLocation}>{item.date}</Text>
          </View>
        </View>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Compras</Text>
        <FlatList
          data={transactions}
          renderItem={location}
          keyExtractor={item => item.id}
          style={styles.itemList}
        />
         
    </SafeAreaView>
  )
}
