import { StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: FONT_SIZE.xxl,
    fontWeight: 'bold',
    color: COLORS.secondaty
  },
  subTitle: {
    fontSize: FONT_SIZE.xl,
    fontWeight: 'bold',
    color: COLORS.primary,
    paddingBottom: 50
  },
  buttonIn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 120,
    alignItems: 'center'
  },
  buttonUp: {
    backgroundColor: COLORS.secondaty,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 120,
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
  roundedContainer: {
    marginTop: 20,
    overflow: 'hidden',
    borderRadius: 300,
    height: '70%',
    marginHorizontal: -80
  }
  // title: {
  //   fontSize: FONT_SIZE.xxxl,
  //   fontWeight: 'bold',
  //   color: COLORS.white,
  //   width: '75%',
  //   marginLeft: 25
  // }
})
