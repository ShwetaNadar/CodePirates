import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Navigator from './Navigator';
import Login from './screens/Login';
import Register from './screens/Register';
import AddProducts from './screens/AddProducts';
import EditProduct from './screens/EditProduct';
import Dashboard from './screens/Dashboard';
import DashboardAgent from './screens/DashboardAgent';
import ViewProduct from './screens/ViewProduct';
import store from './config/store';
import {Provider} from 'react-redux';
const Stack = createStackNavigator();

/* App Fonts */
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Poppins-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Poppins-Light',
      fontWeight: 'normal',
    },
  },
};

/* App Theme */
const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: '#6153B7',
    accent: '#39E1C1',
    background: '#FDFDFD',
    text: '#696969',
    textLight: '#8C8C8C',
    error: '#EA0B43',
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Add Products" component={AddProducts} />
            <Stack.Screen name="Edit Product" component={EditProduct} />
            <Stack.Screen name="Dashboard Admin" component={Dashboard} />
            <Stack.Screen name="Dashboard Agent" component={DashboardAgent} />
            <Stack.Screen name="View Products" component={ViewProduct} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;
