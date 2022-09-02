import React from 'react';
import { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';

import Header from './app/components/Header';
import lineItems from './app/components/LineItemData';
import {
  Container,
  Order,
  OrderView,
  Name,
  Price,
  PricingView,
  DetailsView,
  ItemDetails,
  ItemView,
  Calculation,
  Input,
} from './app/components/Styles';

export default function App() {
  const [search, setSearch] = useState('');
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState(lineItems);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setFullData(data);
  };

  const handleFilter = text => {
    const updatedData = lineItems.filter(item => {
      const item_data = `${item.name.toUpperCase()}`;
      const text_data = text.toUpperCase();
      if (text.length > 0) {
        return item_data.indexOf(text_data) > -1;
      } else return data;
    });
    setData(updatedData);
    setSearch(text);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <Container>
          <OrderView>
            <Order>{item.order}</Order>
          </OrderView>
          <ItemView>
            <Name>
              {item.name}: {item.id}
            </Name>
            <ItemDetails>{item.description}</ItemDetails>
            <DetailsView>
              <ItemDetails>QTY: {item.qty}</ItemDetails>
              <ItemDetails>LAST QTY: {item.lastQty}</ItemDetails>
              <ItemDetails>FILL CAP: {item.fillCap}</ItemDetails>
            </DetailsView>
            <ItemDetails>WAREHOUSE: {item.wareHouse}</ItemDetails>
          </ItemView>
          <PricingView>
            <Price>
              {'$'}&nbsp;{item.qty * item.price}
            </Price>
            <Calculation>
              {item.qty} x {'$'}&nbsp;{item.price}
            </Calculation>
          </PricingView>
        </Container>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <Header />
      <Input
        placeholder="Search for item..."
        onChangeText={text => handleFilter(text)}
        value={search}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
