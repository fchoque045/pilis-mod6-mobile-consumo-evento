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
    fontWeight: '500',
    padding: 10,
    color: COLORS.white,
    width: '100%',
    textAlign: 'center',
    backgroundColor: COLORS.primary
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
  containerTransaction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  titleBusiness: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '100%'
  },
  titleLocation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    width: '100%'
  },
  scroll: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    width: Dimensions.get('screen').width
  }
})
