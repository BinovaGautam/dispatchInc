import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { CText, Icon } from '.'
import { MetricsSizes } from '@/Theme/Variables'

type Props = {
    text ? : string
}

const {height,LARGE} = MetricsSizes

const EmptyComponent = ({text}: Props) => {
    const {Layout,Colors} = useTheme()
  return (
    <View style={[Layout.fill , Layout.colCenter , Layout.justifyContentCenter,styles.container]} >
       <Icon type="Bootstrap" name="clipboard2" size={LARGE*2} color={Colors.primary} />
       <CText as="h5" style={{textAlign:'center',marginVertical : 20}}> {text || "No Data Found"} </CText>
    </View>
  )
}

export default EmptyComponent

const styles = StyleSheet.create({
    container :{
        minHeight : height*0.6
    }
})