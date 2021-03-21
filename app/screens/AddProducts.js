import React, {useState} from 'react';
import {View, KeyboardAvoidingView, Image} from 'react-native';
import {
  useTheme,
  TextInput,
  Button,
  Text,
  ToggleButton,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';

const AddProducts = ({navigation}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [value, setValue] = useState('left');
  const [add, setAdd] = useState('product');
  const [imageUri, setImageUri] = useState();

  const theme = useTheme();

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={40}>
      <View style={{marginTop: 16}}>
        <View style={{flexDirection: 'row'}}>
          <Button
            style={{margin: -10}}
            color={add === 'company' ? 'green' : theme.colors.primary}
            onPress={() => setAdd('company')}>
            Add Company
          </Button>
          <Button
            style={{margin: -10}}
            color={add === 'category' ? 'green' : theme.colors.primary}
            onPress={() => setAdd('category')}>
            Add Category
          </Button>
          <Button
            style={{margin: -10}}
            color={add === 'product' ? 'green' : theme.colors.primary}
            onPress={() => setAdd('product')}>
            Add Product
          </Button>
        </View>
        {add === 'company' ? (
          <>
            <TextInput
              label="Company Name"
              // value={email}
              // onChangeText={text => setEmail(text)}
              style={{marginVertical: 8}}
            />
            <Button mode="contained" style={{margin: 8}}>
              Add Company
            </Button>
          </>
        ) : (
          <>
            {add === 'category' ? (
              <>
                <View>
                  <Picker
                    mode="dropdown"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }
                    style={{margin: 5}}>
                    <Picker.Item label="Select Company" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
                <TextInput
                  label="Name of Category"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Description"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <View style={{flexDirection: 'row'}}>
                  <Button
                    onPress={() => {
                      ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: true,
                      }).then(image => {
                        console.log(image);
                        setImageUri(image);
                      });
                    }}>
                    Click Picture
                  </Button>
                  <Button
                    onPress={() => {
                      ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true,
                      }).then(image => {
                        console.log(image);
                        setImageUri(image);
                      });
                    }}>
                    Upload from Gallery
                  </Button>
                </View>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    // uri: 'https://reactnative.dev/img/tiny_logo.png',
                    uri: imageUri,
                  }}
                />
                <Button mode="contained" style={{margin: 8}}>
                  Add Category
                </Button>
              </>
            ) : (
              <>
                <View>
                  <Picker
                    mode="dropdown"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }
                    style={{margin: 5}}>
                    <Picker.Item label="Select Company" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>
                <View>
                  <Picker
                    mode="dropdown"
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }
                    style={{margin: 5}}>
                    <Picker.Item label="Select Category" value="" />
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker>
                </View>

                <TextInput
                  label="Product Name"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Specifications of device"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="MRP"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Buying Date"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Selling Date"
                  // value={email}
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <View style={{flexDirection: 'row'}}>
                  <Button
                    onPress={() => {
                      ImagePicker.openCamera({
                        width: 300,
                        height: 400,
                        cropping: true,
                      }).then(image => {
                        console.log(image);
                        setImageUri(image);
                      });
                    }}>
                    Click Picture
                  </Button>
                  <Button
                    onPress={() => {
                      ImagePicker.openPicker({
                        width: 300,
                        height: 400,
                        cropping: true,
                      }).then(image => {
                        console.log(image);
                        setImageUri(image);
                      });
                    }}>
                    Upload from Gallery
                  </Button>
                </View>
                <Image
                  style={{width: 50, height: 50}}
                  source={{
                    // uri: 'https://reactnative.dev/img/tiny_logo.png',
                    uri: imageUri,
                  }}
                />
                <Button mode="contained" style={{margin: 8}}>
                  Add Product
                </Button>
              </>
            )}
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default AddProducts;
