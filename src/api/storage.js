import AsyncStorage from '@react-native-async-storage/async-storage'
import Constants from 'expo-constants'

const key = Constants.manifest.extra.STORAGE_KEY

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
  } catch (e) {
    console.log('Error storeData=>' + e)
  }
}
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.log('Error getData=>' + e)
  }
}
export const removeData = async () => {
  try {
    await AsyncStorage.removeItem(key)
  } catch (e) {
    console.log('Error removeData=>' + e)
  }
}
