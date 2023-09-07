import Toast from 'react-native-toast-message'

export const showToastError = (titulo, subTitle) => {
  Toast.show({
    type: 'error',
    text1: titulo,
    text2: subTitle,
    position: 'bottom'
  })
}
