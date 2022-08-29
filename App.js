import React from 'react';
import {View, FlatList, TextInput} from 'react-native';
import {useState} from 'react';
import styled from 'styled-components';

import Header from './app/components/Header';
import LineItem from './app/components/LineItem';

export default function App() {
  const [text, setText] = useState('');
  const [lineItems, setLineItems] = useState([
    {
      id: '000309',
      order: '01',
      name: 'Specialty Drink',
      description: 'Hint BlackBerry',
      qty: 4,
      lastQty: 5,
      fillCap: 0,
      wareHouse: 'W3',
      price: 25.27,
    },
    {
      id: '000358',
      order: '02',
      name: 'Chlorine Tab',
      description: 'Pool Maintenance',
      qty: 3,
      lastQty: 10,
      fillCap: 2,
      wareHouse: 'W2',
      price: 44.99,
    },
    {
      id: '000410',
      order: '03',
      name: 'Air Filter',
      description: 'Replacement for AC unit',
      qty: 4,
      lastQty: 18,
      fillCap: 3,
      wareHouse: 'W4',
      price: 28.63,
    },
    {
      id: '000553',
      order: '04',
      name: 'Weed Wacker',
      description: 'Used for Landscaping jobs',
      qty: 2,
      lastQty: 8,
      fillCap: 5,
      wareHouse: 'W1',
      price: 34.52,
    },
    {
      id: '000691',
      order: '05',
      name: 'Coffee Filter',
      description: 'Folgers Brand',
      qty: 6,
      lastQty: 14,
      fillCap: 1,
      wareHouse: 'W6',
      price: 6.28,
    },
    {
      id: '000732',
      order: '06',
      name: 'Lipton Tea',
      description: 'Unsweetened Packets',
      qty: 11,
      lastQty: 20,
      fillCap: 7,
      wareHouse: 'W5',
      price: 8.64,
    },
  ]);

  return (
    <View>
      <Header />
      <StyledInput placeholder="Search for item..." />
      <FlatList
        data={lineItems}
        nestedScrollEnabled={true}
        renderItem={({item}) => <LineItem item={item} />}
      />
    </View>
  );
}

const StyledInput = styled.TextInput`
  background-color: #ededed;
  height: 25px;
  width: 250px;
  text-align: center;
  padding-bottom: 0px;
  margin: 0 auto;
  margin-top: -5px
  border-radius: 15px;
`;
