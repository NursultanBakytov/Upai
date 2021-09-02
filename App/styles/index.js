import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  WIDTH: Dimensions.get('window').width,
  fdRow: {flexDirection: 'row', alignItems: 'center'},
  center: {alignItems: 'center', justifyContent: 'center'},
  mh20: {marginHorizontal: 20},
  ph20: {paddingHorizontal: 20},
  ph10: {paddingHorizontal: 10},
  fsz16: {fontSize: 16},
  white: {color: 'white'},
  fl1: {flex: 1},
  wh20: {width: 20, height: 20},
  center: {alignItems: 'center', justifyContent: 'center'},
  // ----------------------------------------------------
  CustomInput: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 18,
    borderRadius: 10,
    borderColor: '#225196',
    borderWidth: 1,
    alignSelf: 'center',
  },
  // ----------------------------------------------------
  // ############### START BURGER STYLES ###############
  BurgerItems: {
    flexDirection: 'row',
    borderBottomColor: '#EBEBEB',
    paddingVertical: 14,
    paddingLeft: 36,
  },
  BurgerItemsText: {marginLeft: 30},
  // ############### END BURGER STYLES ###############
  // ----------------------------------------------------
  // ############### START LOGIN STYLES ###############
  LoginSocialNet: {
    color: '#515151',
    alignSelf: 'center',
    marginTop: 54,
    fontSize: 18,
    fontFamily: 'Pro',
  },
  LoginSocialContainer: {
    flexDirection: 'row',
    marginTop: 25,
    alignSelf: 'center',
  },
  LoginSocialBlocks: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#225196',
    borderWidth: 1,
  },
  LoginButton: {
    backgroundColor: '#225196',
    borderRadius: 30,
    width: 163,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  LoginRecover: {
    fontFamily: 'Pro',
    alignSelf: 'center',
    fontSize: 12,
    color: '#225196',
    marginTop: 15,
  },
  LoginRegistrText: {
    fontFamily: 'Pro',
    alignSelf: 'center',
    fontSize: 16,
    color: '#225196',
    marginTop: 100,
  },
  // ################ END LOGIN STYLES ################
  // ----------------------------------------------------
  // ############### START HOME STYLES ###############
  HomeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 18,
    marginVertical: 10,
  },
  HomeHeaderBalance: {
    flexDirection: 'row',
    marginHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HomeCoin: {
    width: 78,
    height: 38,
    backgroundColor: '#FF6B00',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // ############### END HOME STYLES ###############
  // ----------------------------------------------------
});

export default styles;
