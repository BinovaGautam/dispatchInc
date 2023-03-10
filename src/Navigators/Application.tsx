import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { LoginContainer, StartupContainer } from '@/Containers'
import { useAuth, useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'

const SomeComp = () => 
  <View style={{flex: 1, backgroundColor: 'blue', justifyContent: 'center'}}>
    <Text>Are Bhai Bhai </Text>
  </View>


const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const { isLoggedIn,userDetails } = useAuth()

  console.log('USER DETAILS',userDetails)

  return (
    <SafeAreaView style={[Layout.fill, {backgroundColor: colors.card}]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Startup" component={StartupContainer} />
            <Stack.Screen
              name="Main"
              component={isLoggedIn ? MainNavigator : LoginContainer}
              options={{
                animationEnabled: false,
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default ApplicationNavigator
