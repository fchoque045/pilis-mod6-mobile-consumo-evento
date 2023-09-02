import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, Modal, Alert } from 'react-native'
import { styles } from './ProfileScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { removeData } from '../../api/storage'
import { UserContext } from '../../contexts/UserContext'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const { setCurrentUser } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false)
  const handle = () => {
    setCurrentUser(null)
    removeData()
    navigation.navigate('Welcome')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>salir</Text>
      </TouchableOpacity>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Desea cerrar sesión?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.buttonYes}
                onPress={handle}
              >
                <Text style={styles.modalTextButton}>Si</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonNo}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalTextButton}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
