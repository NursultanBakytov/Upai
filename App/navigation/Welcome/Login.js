import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import MaskInput, {createNumberMask} from 'react-native-mask-input';
import {Shadow} from 'react-native-shadow-2';

import styles from '../../styles';
import {ToastShow} from '../../Components/ToastShow';
import CustomInput from '../../Components/CustomInput';

const Login = props => {
  // -------------------------------------------------------------
  const [Phone, setPhone] = useState('');
  const [Password, setPassword] = useState('');
  // -------------------------------------------------------------
  const SendData = () => {
    if (Phone === '') {
      ToastShow('Введите номер телефона!', 2000);
    } else if (Password === '') {
      ToastShow('Введите пароль!', 2000);
    } else {
      const data = new FormData();

      data.append('phone', Phone);
      data.append('password', Password);

      // appAxios
      //   .post('user/login', data)
      //   .then(({data, ...res}) => {
      //     console.log(data);
      //     if (data.result === 1) {
      //     } else {
      //       ToastShow(data.message, 2000);
      //     }
      //   })
      //   .catch(e => {
      //     console.log(e);
      //   });
    }
  };
  // -------------------------------------------------------------

  return (
    <SafeAreaView style={styles.fl1}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.0)" />
      <Toast style={{zIndex: 1}} ref={ref => Toast.setRef(ref)} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        {/* <View style={styles.LoginIcon}>{IMAGE.LoginIcon}</View> */}
        <Image
          resizeMode="contain"
          style={{width: 108, height: 108, alignSelf: 'center', marginTop: 110}}
          source={require('../../assets/SplashIcon.png')}
        />
        {/* --- Start SocialBlock --- */}
        <Text style={styles.LoginSocialNet}>Войти через социальные сети</Text>

        <View style={styles.LoginSocialContainer}>
          <Shadow distance={4}>
            <TouchableOpacity style={styles.LoginSocialBlocks}>
              <Image
                style={{width: 28, height: 28}}
                source={require('../../assets/GoogleIcon.png')}
              />
            </TouchableOpacity>
          </Shadow>
          {/* ------------------- */}
          <Shadow distance={4} containerViewStyle={{marginLeft: 60}}>
            <TouchableOpacity style={[styles.LoginSocialBlocks]}>
              <Image
                style={{width: 28, height: 28}}
                source={require('../../assets/FacebookIcon.png')}
              />
            </TouchableOpacity>
          </Shadow>
        </View>
        {/* --- End SocialBlock --- */}

        {/* --- Start Inputs --- */}
        <View
          style={[
            styles.CustomInput,
            {width: '80%', marginTop: 43, marginBottom: 15},
          ]}>
          <Image
            style={{width: 22, height: 22, marginRight: 7}}
            source={require('../../assets/PhoneIcon.png')}
          />
          <MaskInput
            value={Phone}
            placeholder="Номер"
            maxLength={12}
            keyboardType="number-pad"
            style={{width: '90%', paddingBottom: 8}}
            mask={createNumberMask({
              prefix: ['0'],
              delimiter: ' ',
              separator: ' ',
              precision: 4,
            })}
            onChangeText={obfuscated => setPhone(obfuscated)}
          />
        </View>
        {/* --------------------- */}
        <CustomInput
          value={Password}
          setValue={setPassword}
          icon={require('../../assets/PasswordIcon.png')}
          placeholder="Пароль"
          security={true}
          width="80%"
        />
        <TouchableOpacity
          style={[styles.LoginButton]}
          onPress={() => props.navigation.replace('Drawer')}>
          <Text style={{fontFamily: 'Pro', fontSize: 16, color: '#FFF'}}>
            Войти
          </Text>
        </TouchableOpacity>
        {/* --- End Inputs --- */}

        {/* --- Send Button --- */}
        {/* ------------------- */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Recover')}>
          <Text style={styles.LoginRecover}>Не могу войти</Text>
        </TouchableOpacity>
        {/* ------------------- */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
          <Text style={styles.LoginRegistrText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        {/* ------------------- */}
        <View style={{marginVertical: 25}} />
        {/* ------------------- */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
