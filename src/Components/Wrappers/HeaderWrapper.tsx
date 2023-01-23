import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'

type Props = {
    children: ReactNode;
    style ? : any
}
const {SMALL,REGULAR} = MetricsSizes

const HeaderWrapper = ({children,style}: Props) => {
  return (
   <View style={[styles.container,style]}>
        {children}
   </View>
  )
}

export default HeaderWrapper

const styles = StyleSheet.create({
    container : {
        backgroundColor:  Colors.white,
        padding: SMALL,
        minHeight : SMALL*5,

    }
})