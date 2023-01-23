import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors, MetricsSizes } from '@/Theme/Variables'
import { useTheme } from '@/Hooks'
import { Icon } from '@/Components'
import { TextInput } from 'react-native-gesture-handler'

type Props = {
    onChangeText ? : (text: string) => void;
}
const {SMALL,TINY,LARGE,REGULAR} = MetricsSizes    

const SearchInput = ({onChangeText}: Props) => {
  const {Layout, Colors} = useTheme();
  return (
    <View style={[styles.searchBox, Layout.rowHCenter]}>
      <Icon
        type="Bootstrap"
        name="search"
        size={REGULAR}
        color={Colors.SUBTEXT}
      />
      <TextInput
        onChangeText={onChangeText}
        placeholder="Search"
        placeholderTextColor={Colors.SUBTEXT}
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchInput

const styles = StyleSheet.create({
    searchBox : {
        height : LARGE,
        backgroundColor : Colors.grey200,
        flex:1,
        // width : '100%',
        borderRadius : TINY,
        paddingHorizontal : SMALL,
    },
    searchInput : {
        flex : 1,
        color : Colors.SUBTEXT,
        paddingHorizontal : SMALL,
    }
})