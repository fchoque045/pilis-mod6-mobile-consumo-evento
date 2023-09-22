import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.white
  },
  title: {
    fontSize: FONT_SIZE.lg,
    fontWeight: '400',
    color: COLORS.white
  },
  subTitle: {
    fontSize: FONT_SIZE.lg,
    fontWeight: '400',
    color: COLORS.white,
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
    // height: '70%',
    height: Dimensions.get('screen').height - 300,
    marginHorizontal: -80
  }
})
