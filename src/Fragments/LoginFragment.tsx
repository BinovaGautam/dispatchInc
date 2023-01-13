import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText, InputComp, VGap } from '@/Components'

type Props = {
    toggleLogin : () => void
}

const LoginFragment = ({toggleLogin}: Props) => {
  const {Colors} = useTheme();
  return (
    <View>
      <InputComp noSign={true} required={true} placeholder="Email Address" />
      <InputComp
        noSign={true}
        // secureTextEntry={!isVisible}
        secureTextEntry={true}
        required={true}
        placeholder="Password"
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