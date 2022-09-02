import React from 'react';
import { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, TextInput } from 'react-native';

import styled from 'styled-components';

import Header from './app/components/Header';
import lineItems from './app/components/LineItemData';

export default function App() {
  const [search, setSearch] = useState('');
  const [fullData, setFullData] = useState([]);
  const [data, setData] = useState(lineItems);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const res = data;

    setFullData(res);
  };

  const handleFilter = text => {
    const updatedData = lineItems.filter(item => {
      const item_data = `${item.name.toUpperCase()})`;
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
              {item.qty} x {'$' + item.price}
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

const Input = styled.TextInput`
    background-color: #ededed;
    height: 25px;
    width: 250px;
    text-align: center;
    padding-bottom: 0px;
    margin: 0 auto;
    margin-top: -5px
    border-radius: 5px;
  `;

const Container = styled.View`
  padding: 5px;
  height: 100px;
  background-color: #ededed;
  margin: 5px;
  margin-top: 20px;
  border-radius: 10px;
`;

const Order = styled.Text`
  color: #105e26;
  font-size: 10px;
  font-weight: 600
  text-align: center;

`;

const OrderView = styled.View`
  margin: 5px;
  width: 20px;
  border-radius: 3px;
  background-color: #fffec8;
  padding: 1px;
`;

const Name = styled.Text`
  color: #192841;
  font-size: 18px;
  font-weight: 600
  padding-left: 20px;
`;

const Price = styled.Text`
  color: #303030;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

const PricingView = styled.View`
  position: absolute;
  margin-left: 80%;
  margin-top: 25px;
  height: 60px;
`;

const DetailsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const ItemView = styled.View`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  margin-top: -25px;
`;

const ItemDetails = styled.Text`
  color: #333
  font-size: 14px
  line-height: 20px
  margin-left: 20px

`;

const Calculation = styled.Text`
  font-size: 12px;
  text-align: center;
`;
