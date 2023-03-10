import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ExampleContainer, HomeContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabBarFragment } from '@/Fragments';


// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}
    tabBar = {props => <TabBarFragment {...props} />} 
     >
      <Tab.Screen name="Home" component={HomeContainer} />
      <Tab.Screen name="Upload" component={ExampleContainer} />
      <Tab.Screen name="Account" component={ExampleContainer} />
    </Tab.Navigator>
  );
}

export default MainNavigator
