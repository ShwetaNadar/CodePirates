import React, {useState, useMemo} from 'react';
import {View, Dimensions} from 'react-native';

import {Card, Text, Avatar, Button, Title, Paragraph} from 'react-native-paper';

const ProductCard = ({url, title, para}) => {
  return (
    <View style={{margin: 16}}>
      <Card>
        <Card.Cover source={{uri: url}} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{para}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ProductCard;
