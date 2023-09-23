import { StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey,
    marginTop: StatusBar.currentHeight
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
  subTitle1: {
    paddingTop: 30,
    fontSize: FONT_SIZE.md,
    fontWeight: '300',
    color: COLORS.text,
    width: '100%',
    textAlign: 'center'
  },
  subTitle2: {
    fontSize: FONT_SIZE.md,
    fontWeight: '300',
    color: COLORS.greenDark,
    width: '100%',
    textAlign: 'center'
  },
  text1: {
    fontSize: FONT_SIZE.md,
    fontWeight: '300',
    color: 'black',
    marginVertical: 5
  },
  text2: {
    fontSize: FONT_SIZE.md,
    fontWeight: '300',
    color: COLORS.text,
    textAlign: 'right',
    marginVertical: 5
  },
  border: {
    borderColor: COLORS.inactivePri,
    borderTopWidth: 1,
    paddingTop: 10,
    marginTop: 10
  },
  contain: {
    width: '50%'
  }
})
