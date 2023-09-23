import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: StatusBar.currentHeight
  },
  modalContainerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButtons: {
    flexDirection: 'row'
  },
  modalButtonYes: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#f32121',
    marginHorizontal: 10
  },
  modalButtonNo: {
    borderRadius: 20,
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    backgroundColor: '#2196F3',
    marginHorizontal: 10
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  },
  modalTextButton: {
    color: COLORS.white,
    marginBottom: 2,
    textAlign: 'center'
  },
  scroll: {
    backgroundColor: 'rgba(255, 0, 0, 0.0)',
    width: Dimensions.get('screen').width
  },
  cardView: {
    margin: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 20,
    alignItems: 'flex-start',
    height: Dimensions.get('screen').height - 120
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100
  },
  subTitle: {
    fontSize: FONT_SIZE.md,
    fontWeight: 'normal',
    color: COLORS.greenDark,
    marginTop: 15,
    width: '100%'
  },
  imgContainer: {
    width: '100%',
    alignItems: 'center'
  },
  input: {
    height: 40
  },
  button: {
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 10,
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: COLORS.grey
  },
  buttonText: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold'
  },
  border: {
    borderColor: COLORS.inactivePri,
    borderTopWidth: 1,
    paddingTop: 5
  },
  containButton: {
    width: '100%',
    marginTop: 15
  }
})
