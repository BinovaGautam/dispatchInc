import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CText, HeaderWrapper, HGap, Icon, IconBtnWrapper, SearchInput } from '@/Components'
import { MetricsSizes } from '@/Theme/Variables'
import { useTheme } from '@/Hooks'

const {REGULAR,TINY,SMALL} = MetricsSizes
type Props = {}

const HomeHeaderFragment = (props: Props) => {
    const {Colors} = useTheme()
  return (
    <HeaderWrapper style={styles.wrapper} >
        <SearchInput />
        <View style={styles.inRowIcons}>
             <IconBtnWrapper onPress={() => {}} >
               <Icon type="Bootstrap" name="download" size={SMALL*2} color={Colors.white} />
            </IconBtnWrapper>
            <HGap />
             <IconBtnWrapper onPress={() => {}} >
               <Icon type="Bootstrap" name="funnel" size={SMALL*2} color={Colors.white} />
            </IconBtnWrapper>
        </View>
    </HeaderWrapper>
  )
}

export default HomeHeaderFragment

const styles = StyleSheet.create({
    wrapper : {
        paddingHorizontal : REGULAR,
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    inRowIcons : {
        flexDirection : 'row',
        marginLeft : TINY,
        alignItems : 'center',
    }
})