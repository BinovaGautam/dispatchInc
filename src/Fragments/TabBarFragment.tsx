import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors, MetricsSizes } from '@/Theme/Variables';
import { useTheme } from '@/Hooks';
import Animated from 'react-native-reanimated';
import { Icon, ImgIcon, TabItem } from '@/Components';

type Props = {}
const {TINY,SMALL,REGULAR} = MetricsSizes

const tabs: any = {
  Home: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <Ionicons name="home" size={24} />,
      activeColor: '#5B37B7',
      inactiveColor: 'rgba(255,255,255,1)',
    },
    background: {
      activeColor: '#5B37B756',
      inactiveColor: '#fff',
    },
  },
  Progress: {
    labelStyle: {
      color: '#5B37B7',
    },
    icon: {
      component: <Ionicons name="bar-chart" size={24} />,
      activeColor: '#5B37B7',
      inactiveColor: 'rgba(255,255,255,1)',
    },
    background: {
      activeColor: '#5B37B756',
      inactiveColor: '#fff',
    },
  },
};




const TabBarFragment = (props: any) => {
    const {Images} = useTheme()

    const _renderIcon = (label:string,isFocused :boolean) => {
        let color = isFocused ? Colors.primary : Colors.grey
        let size = 20
        switch (label.trim().toLowerCase()) {
            case 'home':
                return <Icon type="Bootstrap" name="house-door-fill" size={SMALL*2} color={color} />
                break;
            case 'upload':
                return <Icon type="Bootstrap" name="cloud-arrow-up" size={SMALL*2} color={color} />;
                break;
            case 'account':
                return <Icon type="Bootstrap" name="person" size={SMALL*2} color={color} />;
                break;

        
            default:
                break;
        }
    };
  return (
    <View style={styles.container} > 
     {
        props?.state?.routes.map((route : any, index : number) => {
        return <TabItem key={index} {...props} route={route} _renderIcon={_renderIcon} index={index} />
        })
     }
    </View>
  )
}

export default TabBarFragment

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: TINY,

    },
   
})