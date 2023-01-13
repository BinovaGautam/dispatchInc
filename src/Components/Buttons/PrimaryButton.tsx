import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { CText } from '../Common'

type Props = {
  onPress?: () => void;
  title: string;
  style?: any;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loadingColor?: string;
  loadingSize?: number;
  loadingStyle?: any;
  txtStyle?: any;
  txtColors   ?: any
  secondary?: boolean;
};

const {SMALL,TINY} = MetricsSizes

const PrimaryButton = ({
  title,
  onPress,
  style,
  disabled,
  loading,
  loadingText,
  txtStyle,
  txtColors,
  secondary
}: Props) => {
  let TextColor = secondary ? Colors.primary : Colors.white
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={[styles.btn, style, secondary && styles.btnSecondary]}>
      <CText as="pmd" style={[txtStyle]} color={txtColors || TextColor}>
        {loading ? loadingText || title : title}{' '}
      </CText>
      {loading && <ActivityIndicator size={20} color={Colors.white} />}
    </Pressable>
  );
};

export default PrimaryButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor:  Colors.primary,
        borderRadius: TINY*5,
        padding: SMALL,
        margin: SMALL,
        justifyContent: 'center',
        alignItems: 'center',
        height : SMALL*5,
        flexDirection: 'row',
    },
    btnSecondary: {
        backgroundColor:'transparent',
        borderWidth: 1,
        borderColor: Colors.primary,
    },
    
    btnTxt : {
        color: '#fff',
        fontSize: 16,
    }

})