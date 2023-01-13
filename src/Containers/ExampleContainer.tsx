import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@/Hooks'
import { CText, TestComp } from '@/Components'

type Props = {}



const ExampleContainer = (props: Props) => {
  const {Layout} = useTheme()
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <TestComp />
    </View>
  );
}

export default ExampleContainer

const styles = StyleSheet.create({})