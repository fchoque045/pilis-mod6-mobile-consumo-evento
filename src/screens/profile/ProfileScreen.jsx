import React, { useContext, useState } from 'react'
import { Text, View, TouchableOpacity, Modal, Alert, ScrollView, SafeAreaView, Image, TextInput } from 'react-native'
import { styles } from './ProfileScreen.styles'
import { useNavigation } from '@react-navigation/native'
import { removeData } from '../../api/storage'
import { UserContext } from '../../contexts/UserContext'
import { Ionicons } from '@expo/vector-icons'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [modalVisible, setModalVisible] = useState(false)

  const handle = () => {
    setCurrentUser(null)
    removeData()
    navigation.navigate('Welcome')
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.cardView}>
          <View style={styles.imgContainer}>
            <Image style={styles.profileImage} source={require('../../../assets/user_log.png')} />
          </View>
          <Text style={[styles.subTitle, styles.border]}>Nombre y Apellido</Text>
          <TextInput style={styles.input} placeholder='Nombre y Apellido' value={currentUser.user.fullname} editable={false} />
          <Text style={[styles.subTitle, styles.border]}>DNI</Text>
          <TextInput style={styles.input} placeholder='DNI' value={String(currentUser.user.dni)} editable={false} />
          <Text style={[styles.subTitle, styles.border]}>Correo Electronico</Text>
          <TextInput style={styles.input} placeholder='Correo Electronico' value={currentUser.user.email} editable={false} />
          <View style={[styles.containButton, styles.border]}>
            <TouchableOpacity style={[styles.button]} onPress={() => setModalVisible(true)} activeOpacity={0.7}>
              <Ionicons name='log-out-outline' size={24} color='gray' />
              <Text style={styles.buttonText}> Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType='slide'
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.')
          setModalVisible(!modalVisible)
        }}
      >
        <View style={styles.modalContainerView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Desea cerrar sesión?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButtonYes}
                onPress={handle}
              >
                <Text style={styles.modalTextButton}>Si</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonNo}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.modalTextButton}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}
