import React, {useState, useMemo} from 'react';
import {View, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
// import Barcode from 'react-native-barcode-builder';
import {
  useTheme,
  TextInput,
  Button,
  Text,
  Drawer,
  Appbar,
  FAB,
} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const DashboardAgent = ({navigation}) => {
  const line = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        data: [300, 550, 180, 600, 890, 530],
        strokeWidth: 2, // optional
      },
    ],
  };
  const laptop = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
    datasets: [
      {
        data: [225, 897, 654, 160, 550, 452],
        strokeWidth: 2, // optional
      },
    ],
  };
  const [selectedLanguage, setSelectedLanguage] = useState();
  // const header = useMemo(
  //   () => ({
  //     title: 'Dashboard',
  //   }),
  //   [],
  // );
  // alert(selectedLanguage);
  return (
    <>
      {/* <Appbar.Header>
        <Appbar.Content title={header.title} />
      </Appbar.Header> */}
      <View style={{margin: 15}}>
        <Picker
          mode="dropdown"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Select Category" value="" />
          <Picker.Item label="Mobile" value="mobile" />
          <Picker.Item label="Television" value="tv" />
        </Picker>
      </View>
      <View style={{marginLeft: 15}}>
        {selectedLanguage ? (
          <>
            <Text>Sales of the products</Text>
            <LineChart
              data={line}
              width={330} // from react-native
              height={220}
              chartConfig={{
                backgroundColor: '#EEEEEE',
                backgroundGradientFrom: '#EEEEEE',
                backgroundGradientTo: '#EEEEEE',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </>
        ) : (
          <LineChart
            data={laptop}
            width={330} // from react-native
            height={220}
            chartConfig={{
              backgroundColor: '#EEEEEE',
              backgroundGradientFrom: '#EEEEEE',
              backgroundGradientTo: '#EEEEEE',
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            bezier
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        )}
      </View>
      <View
        style={{flexDirection: 'row', margin: 16, justifyContent: 'center'}}>
        <Button mode="outlined" style={{marginRight: 8}} onPress={() => {}}>
          1 Day
        </Button>
        <Button mode="outlined" style={{marginRight: 8}} onPress={() => {}}>
          1 Week
        </Button>
        <Button
          mode="outlined"
          style={{marginRight: 8, borderColor: 'green', borderWidth: 1}}
          onPress={() => {}}>
          1 Month
        </Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 250,
        }}>
        <Button
          mode="contained"
          style={{marginRight: 5}}
          onPress={() => navigation.navigate('View Products')}>
          View Products
        </Button>
      </View>
      {/* <Barcode value="Hello World" format="CODE128" />; */}
    </>
  );
};

export default DashboardAgent;
