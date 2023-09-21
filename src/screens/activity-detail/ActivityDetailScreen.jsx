import React, { useContext } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { styles } from './ActivityDetailScreen.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'
import { Link } from '@react-navigation/native'
import { UserContext } from '../../contexts/UserContext'
import moment from 'moment'
import 'moment/locale/es'

moment.locale('es')

export const ActivityDetailScreen = ({ route }) => {
  const { item } = route.params
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalle de Compra</Text>
      <Text style={styles.subTitle1}>Creada el {moment.utc(item.date).format('D MMMM [de] YYYY [-] h:mm a')}</Text>
      <Text style={styles.subTitle2}>Numero de Orden: {item.id}</Text>
      <View style={[styles.cardView, styles.textContainer]}>
          <View>
            <Text style={styles.text1}>Negocio:</Text>
            <Text style={styles.text1}>Puesto:</Text>
            <Text style={styles.text1}>Categoria:</Text>
          </View>
          <View >
            <Text style={styles.text2}>{item.business.name}</Text>
            <Text style={styles.text2}>{item.business.location}</Text>
            <Text style={styles.text2}>{item.type}</Text>
          </View>
      </View>
      <View style={[styles.cardView, styles.textContainer]}>
        <Text style={styles.text1}>Vendedor:</Text>
        <Text style={styles.text2}>{item.business.user.fullname}</Text>
      </View>
      <View style={[styles.cardView, styles.textContainer]}>
        <Text style={styles.text1}>Pagado:</Text>
        <Text style={styles.text1}>${item.amount}</Text>
      </View>
    </ScrollView>
  )
}
