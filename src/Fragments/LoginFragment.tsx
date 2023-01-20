import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText, InputComp, VGap } from '@/Components'

type Props = {
    toggleLogin : () => void;
    handleChangeText : (text : string, name : string) => void;
}

const LoginFragment = ({toggleLogin,handleChangeText}: Props) => {
  const {Colors} = useTheme();
  return (
    <View>
      <InputComp
        onChangeText={(text: string) => handleChangeText(text, 'email')}
        noSign={true}
        required={true}
        placeholder="Email Address"
      />
      <InputComp
        noSign={true}
        // secureTextEntry={!isVisible}
        secureTextEntry={true}
        required={true}
        placeholder="Password"
        onChangeText={(text: string) => handleChangeText(text, 'password')}
      />

      <VGap />
      <Pressable onPress={toggleLogin}>
        <CText color={Colors.SECONDARY}>Don't have an account yet?</CText>
      </Pressable>
    </View>
  );
};

export default LoginFragment

const styles = StyleSheet.create({})