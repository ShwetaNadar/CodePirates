import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme} from 'react-native-paper';

import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';

const HomeTab = createMaterialBottomTabNavigator();
const AuthStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeTabNavigator = () => {
  const theme = useTheme();

  return (
    <HomeTab.Navigator
      labeled
      shifting={false}
      initialRouteName="Dashboard"
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: theme.colors.surface}}>
      <HomeTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          //   tabBarIcon: ({color}) => (
          //     <MaterialCommunityIcons
          //       name="home-outline"
          //       color={color}
          //       size={26}
          //     />
        }}
      />
      <HomeTab.Screen
        name="Dashbo"
        component={Dashboard}
        options={{
          tabBarLabel: 'Booking',
          //   tabBarIcon: ({color}) => (
          //     <MaterialCommunityIcons
          //       name="briefcase-check-outline"
          //       color={color}
          //       size={26}
          //     />
        }}
      />
      <HomeTab.Screen
        name="Dash"
        component={Dashboard}
        options={{
          tabBarLabel: 'Explore',
          //   tabBarIcon: ({color}) => (
          //     <MaterialCommunityIcons
          //       name="compass-outline"
          //       color={color}
          //       size={26}
          //     />
        }}
      />
    </HomeTab.Navigator>
  );
};
const Navigator = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen
          name="HomeTabNavigator"
          component={HomeTabNavigator}
        />
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
      {/* <Stack.Navigator headerMode="none">
        <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default Navigator;
