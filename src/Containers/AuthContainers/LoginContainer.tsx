import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {useTheme} from '@/Hooks';
import {Colors, MetricsSizes} from '@/Theme/Variables';
import {Brand, CText, InputComp, PrimaryButton, VGap} from '@/Components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginFragment, SignupFragment } from '@/Fragments';

type Props = {};

const {SMALL,REGULAR} = MetricsSizes

const LoginContainer = (props: Props) => {
  const {Layout, Images} = useTheme();
  const [isVisible, setVisible] = useState(false);
  const [isLogin, setLogin] = useState(false);

  const toggleLogIn = () => {
    setLogin(!isLogin);
  };
  
  const title = !isLogin ? 'Sign up' : 'Log in';
  return (
    <View style={[Layout.fill, {backgroundColor: '#fff'}]}>
      <StatusBar backgroundColor="#f8f8f8" barStyle="dark-content" />
      <View style={styles.logoContainer}>
        <Brand secondary />
      </View>

      <View style={styles.formContainer}>
        <CText as="h2" color={Colors.primary}>
          {title}
        </CText>
        <VGap />
        <CText as="psm" style={{lineHeight: 18}} color={Colors.SUBTEXT}>
          By continuing, you agree to our
          <CText as="psm" color={Colors.SECONDARY}>
            {' '}
            User Agreement
          </CText>
          and acknowledge that you understand the
          <CText as="psm" color={Colors.SECONDARY}>
            {' '}
            Privacy Policy.
          </CText>
        </CText>

        <VGap height={SMALL * 2} />

        {isLogin ? (
          <LoginFragment toggleLogin={toggleLogIn} />
        ) : (
          <SignupFragment toggleLogin={toggleLogIn} />
        )}
      </View>
      <PrimaryButton
        title={isLogin ? 'Continue' : 'Sign up'}
        onPress={() => {}}
      />
    </View>
  );
};

export default LoginContainer;

const styles = StyleSheet.create({
  logoContainer: {
   justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 40,
    width: 100,
    resizeMode: 'contain',
    marginLeft: 40,
    marginTop: 10,
  },
  imgBg: {
    flex: 1,
    resizeMode: 'cover',
    flexDirection: 'column-reverse',
  },
  formContainer: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: Colors.primary,
    paddingHorizontal: REGULAR,
  },
  txtContainer: {
    margin: 10,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 10,
  },
  largeTxt: {
    fontSize: 30,
    color: Colors.primary,
  },
  subTxt: {
    fontSize: 20,
    color: Colors.primary,
  },
   eyebox : {
        height : 40,
        width : 40,
        justifyContent : 'center',
        alignItems : 'center',
        marginTop : -5
    },
    frgtPassContainer : {
        flexDirection : 'row-reverse',
        alignItems : 'center',
        marginTop: -10,
        marginHorizontal : 20
    },
    frgtPassTxt : {
        fontSize : 12,
        color : Colors.error,
        textAlign : 'right',

    }
});
