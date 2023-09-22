import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from './ActivityDetailScreen.styles'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')

export const ActivityDetailScreen = ({ route }) => {
  const { item } = route.params
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalle de Compra</Text>
      <Text style={styles.subTitle1}>Creada el {moment.utc(item.date).format('D MMMM [de] YYYY [-] HH:mm [hs]')}</Text>
      <Text style={styles.subTitle2}>Numero de Orden: {item.id}</Text>
      <View style={[styles.cardView, styles.textContainer]}>
        <View style={styles.contain}>
          <Text style={styles.text1}>Negocio:</Text>
          <Text style={styles.text1}>Puesto:</Text>
          <Text style={styles.text1}>Categoria:</Text>
          <Text style={styles.text1}>Vendedor:</Text>
          <Text style={[styles.text1, styles.border]}>Pagado:</Text>
        </View>
        <View style={styles.contain}>
          <Text style={styles.text2}>{item.business.name}</Text>
          <Text style={styles.text2}>{item.business.location}</Text>
          <Text style={styles.text2}>{item.type}</Text>
          <Text style={styles.text2}>{item.business.user.fullname}</Text>
          <Text style={[styles.text2, styles.border]}>${item.amount}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
