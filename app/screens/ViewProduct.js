import React, {useState, useMemo} from 'react';
import {View, Dimensions, ScrollView} from 'react-native';

import {Card, Text, Avatar, Button, Title, Paragraph} from 'react-native-paper';
import ProductCard from '../components/ProductCard';
import {Picker} from '@react-native-picker/picker';

const ViewProduct = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <View style={{margin: 15}}>
        <Picker
          mode="dropdown"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Select Company" value="" />
          <Picker.Item label="Laptop" value="laptop" />
          <Picker.Item label="Television" value="tv" />
        </Picker>
      </View>
      {selectedLanguage === 'laptop' ? (
        <>
          <ScrollView>
            <ProductCard
              url={
                'https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-1200-80.jpg'
              }
              title={'Asus'}
              para={'Memory 8GB, HDD 1TB'}
            />
            <ProductCard
              url={
                'https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-1200-80.jpg'
              }
              title={'MI'}
              para={'Memory 8GB, CPU 2.7GHz'}
            />
            <ProductCard
              url={
                'https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-1200-80.jpg'
              }
              title={'HP'}
              para={'Memory 8GB, HDD 1TB'}
            />
            <ProductCard
              url={
                'https://cdn.mos.cms.futurecdn.net/X5TyA8uvkGXoNyjFzxcowS-1200-80.jpg'
              }
              title={'HP'}
              para={'Memory 8GB, CPU 2.5GHz'}
            />
          </ScrollView>
        </>
      ) : (
        <>
          {selectedLanguage === 'tv' ? (
            <>
              <ScrollView>
                <ProductCard
                  url={
                    'https://www.bajajfinserv.in/Image_LED_TV_1_LED_354x202_desktop.jpg'
                  }
                  title={'Samsung'}
                  para={'Worlds thinnest LED TV, 4.9mm ultra-thin'}
                />
                <ProductCard
                  url={
                    'https://www.bajajfinserv.in/Image_QLED_TV_2_QLED_354x202_desktop.jpg'
                  }
                  title={'MI LED TV'}
                  para={'HD Display, 20W Speakers'}
                />
              </ScrollView>
            </>
          ) : null}
        </>
      )}
    </>
  );
};

export default ViewProduct;
