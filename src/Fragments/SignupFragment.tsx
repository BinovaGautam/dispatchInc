import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useTheme} from '@/Hooks';
import {CText, InputComp, VGap} from '@/Components';

type Props = {
    toggleLogin: () => void;
};

const SignupFragment = ({toggleLogin}: Props) => {
  const {Colors} = useTheme();
  return (
    <View>
      <InputComp noSign={true} required={true} placeholder="First name" />
      <InputComp noSign={true} required={true} placeholder="Last name" />
      <InputComp noSign={true} required={true} placeholder="Email Address" />
      <InputComp
        noSign={true}
        secureTextEntry={true}
        required={true}
        placeholder="Password"
      />
      <InputComp
        noSign={true}
        secureTextEntry={true}
        required={true}
        placeholder="Confirm Password"
      />

      <VGap />

     <Pressable onPress={toggleLogin}>
        <CText color={Colors.SECONDARY}>Already have an account?</CText>
    </Pressable>

      
    </View>
  );
};

export default SignupFragment;

const styles = StyleSheet.create({});
