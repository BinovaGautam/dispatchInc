import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useEffect } from 'react'
import { useOrders, useTheme } from '@/Hooks'
import Svg, { Circle, Rect, SvgUri } from 'react-native-svg'
import SomeSvg from  '@/Assets/fonts/calendar2-minus.svg'
import { Colors } from '@/Theme/Variables'
import { Icon } from '.'
type Props = {}

const TestComp = (props: Props) => {
  const {userDetails, allOrdersMutation} = useOrders();
  const {Images} = useTheme();

  useEffect(() => {
    allOrdersMutation.mutate()
  }, [])

  return (
    <View>
      <Text>TestComp hello here we go </Text>
      <Text> HELLO :{JSON.stringify(userDetails)} </Text>
      {/* <Text>Orders : {JSON.stringify} </Text> */}

      <SomeSvg width={20} height={20} fill={Colors.golden} />
      <Icon type="Bootstrap" name="airplane" size={30} color={Colors.primary} />

      <Text style={styles.sampleText}>Sample Text 123</Text>
    </View>
  );
}

export default TestComp

const styles = StyleSheet.create({
  sampleText : {
    color: 'red',
    fontFamily : 'Roboto-medium'
  }
})