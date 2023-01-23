import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'


const {SMALL,REGULAR,TINY,LARGE} = MetricsSizes
type Props = {
    onPress ?: any,
    children ?: ReactNode
}

const IconBtnWrapper = ({onPress,children}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.container} >
        {children}
    </Pressable>
  )
}

export default IconBtnWrapper

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius : TINY,
        padding : TINY,
        height : LARGE,
        width : LARGE,
        backgroundColor: Colors.primary
    }
})