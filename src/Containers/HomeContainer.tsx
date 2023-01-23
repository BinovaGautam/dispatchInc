import { RefreshControl, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { HomeHeaderFragment } from '@/Fragments'
import { useOrders } from '@/Hooks'
import { CText, EmptyComponent, FullScreenLoader } from '@/Components'
import { FlatList } from 'react-native-gesture-handler'
import OrderItemFragment from '@/Fragments/OrderItemFragment'

type Props = {}

export const HOME_SCREEN_ORDER_STATUSES = ["0","3"]

const HomeContainer = (props: Props) => {
    const {allOrdersQuery } = useOrders()
    
    const {isLoading,data,refetch} = allOrdersQuery || {}

    const handleSelect = (item : any) => {
        console.log(item);
        // alert('Hello')
    }

    

    let list = data ? data.filter((item : any)=> HOME_SCREEN_ORDER_STATUSES.includes(item?.status))  : []
  return (
    <View style={{flex: 1}}>
      <HomeHeaderFragment />
      {isLoading && <FullScreenLoader />}
      <FlatList 
        data={list}
        renderItem={(item :any ) =><OrderItemFragment onPress={() => handleSelect(item)} data={item}/>}
        ListEmptyComponent= {() => isLoading ? null : <EmptyComponent text="No Orders Present." />}
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
         />

        {/* <CText as="pxs">Hello : {JSON.stringify(list)} </CText> */}
    </View>
  );
}

export default HomeContainer

const styles = StyleSheet.create({})