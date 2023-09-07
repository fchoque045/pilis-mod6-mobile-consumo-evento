import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.greenDark,
    textAlign: 'center',
    margin: 20
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 50,
    marginHorizontal: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  subTitle: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'normal',
    color: COLORS.greenDark,
    textAlign: 'left',
    marginTop: 20,
    marginHorizontal: 70
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 50
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: COLORS.primary,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    marginLeft: 10
  },
  card: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: '50%',
    paddingBottom: '40%'
  },
  errorText: {
    color: 'red',
    marginHorizontal: 70
  },
  scroll: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    width: Dimensions.get('screen').width
  }
})
