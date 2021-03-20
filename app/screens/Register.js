import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme, TextInput, Button, Text} from 'react-native-paper';

const Register = () => {
  return (
    <View style={styles.screen}>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="Confirm Password" />
      <Button>REGISTER</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 16,
  },
  input: {
    // marginBottom: 6,
    // color: "black",
  },
  title: {
    marginBottom: 24,
  },
});

export default Register;
