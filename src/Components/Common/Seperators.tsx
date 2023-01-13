import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {}
const {SMALL} = MetricsSizes

const Seperators = (props: Props) => {
  return (
    <View>
      <Text>Seperators</Text>
    </View>
  )
}

export const Vr = ({style} : any) => {
    return (
        <View style={[styles.Vr,style]} />
    )
}

export const Hr = ({style} : any) => {
    return (
        <View style={[styles.Hr,style]} />
    )
}

export const VGap = ({style , height} : any) => {
    return (
        <View style={[styles.Gap,style,height && {height}]} />
    )
}

export const HGap = ({style} : any) => {
    return (
        <View style={[styles.HGap,style]} />
    )
}

export default Seperators

const styles = StyleSheet.create({
    Vr : {
        width : 0.5,
        backgroundColor : '#ccc',
        marginHorizontal : SMALL,
    },
    Hr : {
        height : 0.5,
        backgroundColor : '#ccc',
        marginVertical : SMALL,
    },
    Gap : {
        height : SMALL,
    },
    HGap : {
        width : SMALL,
    }
})