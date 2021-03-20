import React from 'react';
import {
  configureFonts,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import Navigator from './screens/Navigation';
import Login from './screens/Login';
import Register from './screens/Register';

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
      <PaperProvider theme={theme}>
        <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
      </PaperProvider>
  );
};

export default App;
