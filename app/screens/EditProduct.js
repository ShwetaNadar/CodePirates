import React, {useState} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import {
  useTheme,
  TextInput,
  Button,
  Text,
  ToggleButton,
  DataTable,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector, useDispatch} from 'react-redux';
import {showCart} from '../actions/actions';

const EditProduct = () => {
  const [selectedCompany, setSelectedCompany] = useState();
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [visible, setVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [price, setPrice] = useState('₹78,990');
  const disp = useDispatch();
  const cart = useSelector(state => state.reducer.cart);

  const handleSubmitCart = () => {
    disp(showCart());
  };

  const companies = [
    {label: 'Select Company', value: ''},
    {label: 'Apple', value: 'Apple'},
    {label: 'Lenovo', value: 'Lenovo'},
    {label: 'Godrej', value: 'Godrej'},
  ];

  const apple = [
    {label: 'Select Category', value: ''},
    {label: 'Mobile Phones', value: 'Mobile Phones'},
    {label: 'iPad', value: 'iPad'},
    {label: 'Laptops', value: 'Laptops'},
  ];

  const godrej = [
    {label: 'Select Category', value: ''},
    {label: 'Washing Machine', value: 'Washing Machine'},
    {label: 'AC', value: 'AC'},
    {label: 'Fridge', value: 'Fridge'},
  ];

  const lenovo = [
    {label: 'Select Category', value: ''},
    {label: 'Mobile Phones', value: 'Mobile Phones'},
    {label: 'Tablets', value: 'Tablets'},
    {label: 'Laptops', value: 'Laptops'},
  ];

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={40}>
      <View>
        {/* <View style={{flexDirection: 'row'}}> */}
        <Picker
          mode="dropdown"
          selectedValue={selectedCompany}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCompany(itemValue)
          }
          style={{margin: 5}}>
          {companies.map(item => (
            <Picker.Item key={item.value} {...item} />
          ))}
          {/* <Picker.Item label="Select Company" value="" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>
        <Picker
          mode="dropdown"
          selectedValue={selectedCategory}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCategory(itemValue)
          }
          style={{margin: 5}}>
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Mobile Phones" value="java" />
          <Picker.Item label="Laptop" value="js" />
        </Picker>
        <Picker
          mode="dropdown"
          selectedValue={selectedProduct}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedProduct(itemValue)
          }
          style={{margin: 5}}>
          <Picker.Item label="Select Product" value="" />
          <Picker.Item label="Legion Y7000 SE Laptop" value="java" />
          {/* <Picker.Item label="JavaScript" value="js" /> */}
        </Picker>
        <Button
          mode="contained"
          style={{margin: 8}}
          onPress={() => setVisible(true)}>
          {/* // onPress={handleSubmitCart}> */}
          Search Product
        </Button>
        {/* <Button
          mode="contained"
          style={{margin: 8}}
          // onPress={() => setVisible(true)}
          onPress={() => alert(JSON.stringify(cart))}>
          Show Product
        </Button> */}
        {visible && (
          <>
            {edit ? (
              <>
                <TextInput
                  label="Product Name"
                  value="Legion Y7000 SE Laptop"
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Specifications of device"
                  value="This 15.6-inch laptop gives you exactly what you need for
                  a gaming experience that pushes performance and
                  portability even further. Its 9th Generation Intel® Core™
                  processors deliver desktop-like performance."
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="MRP"
                  // value="₹78,990"
                  value={price}
                  onChangeText={text => setPrice(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Buying Date"
                  value="12/2/2020"
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <TextInput
                  label="Selling Date"
                  value="14/12/2020"
                  // onChangeText={text => setEmail(text)}
                  style={{marginVertical: 8, margin: 12}}
                />
                <Button
                  onPress={() => {
                    setPrice('₹68,990');
                    setEdit(false);
                  }}>
                  Done
                </Button>
              </>
            ) : (
              <>
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Cell>Product Name</DataTable.Cell>
                    <DataTable.Cell>Legion Y7000 SE Laptop</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Specifications</DataTable.Cell>
                    <DataTable.Cell>
                      <Text>
                        This 15.6-inch laptop gives you exactly what you need
                        for a gaming experience that pushes performance and
                        portability even further. Its 9th Generation Intel®
                        Core™ processors deliver desktop-like performance.
                      </Text>
                    </DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Price</DataTable.Cell>
                    <DataTable.Cell>{price}</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Buying Date</DataTable.Cell>
                    <DataTable.Cell>12/2/2020</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Selling Date</DataTable.Cell>
                    <DataTable.Cell>14/12/2020</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
                <Button onPress={() => setEdit(true)}>Edit</Button>
              </>
            )}
          </>
        )}

        {/* </View> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProduct;
