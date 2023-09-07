import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
    marginTop: StatusBar.currentHeight
  },
  title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.text,
    marginLeft: 20
  },
  subTitle: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginLeft: 20
  },
  cardView: {
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    overflow: 'hidden',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  containerProfile: {
    flexDirection: 'row'
  },
  containerWallet: {
    height: Dimensions.get('screen').height - 240
  },
  walletSaldo: {
    backgroundColor: '#EBF3CE',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleSaldo: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    color: COLORS.greenDark,
    marginLeft: 20
  },
  subTitleSaldo: {
    fontSize: FONT_SIZE.lg,
    fontWeight: 'normal',
    color: COLORS.text,
    marginRight: 20
  },
  walletCode: {
    width: '100%',
    padding: 50,
    marginVertical: 20,
    alignItems: 'center'
  },
  titleCode: {
    marginTop: 50,
    fontSize: FONT_SIZE.xxl,
    fontWeight: 'bold',
    color: COLORS.text
  },
  subTitleCode: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'normal',
    color: COLORS.greenDark
  },
  subRedTitleCode: {
    color: 'red'
  },
  minuteCode: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text
  },
  button: {
    backgroundColor: COLORS.secondaty,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 50,
    alignItems: 'center',
    width: 150
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  scroll: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    width: Dimensions.get('screen').width
  }
})
