import { StyleSheet, StatusBar, Dimensions } from 'react-native'
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
    padding: 10,
    color: COLORS.text,
    width: '100%',
    marginLeft: 25
  },
  cardView: {
    margin: 10,
    backgroundColor: '#EDE0D2',
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
    width: '100%',
  },
  titleLocation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.text,
    width: '100%',
  },
  scroll: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    width: Dimensions.get('screen').width,  
  }
})
