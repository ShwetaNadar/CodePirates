import React from 'react';
import {View} from 'react-native';
import { useTheme, TextInput, Button,Text } from 'react-native-paper';


const Login = ({ navigation }) => {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');

    const theme = useTheme();


  return (
      <View style={{margin: 16}}>
          <Text style={{ fontFamily: 'Poppins-Medium',
        fontSize: 30,
        color: theme.colors.text, textAlign:'center'}}>Welcome!</Text>
    <TextInput
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      style={{marginVertical: 8}}
    />
    <TextInput
      label="Password"
      value={pwd}
      onChangeText={text => setPwd(text)}
    />
    <Button mode="contained" onPress={() => console.log('Pressed')} style={{marginTop: 12}}>
    Login
  </Button>
  <Text style={{margin: 8}}>New User? <Text style={{color: "#8A2BE2"}}  onPress={() => navigation.navigate('Register')}>Register</Text> </Text>
    </View>
  );
};

export default Login;