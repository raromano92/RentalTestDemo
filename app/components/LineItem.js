import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export default function LineItem({item}) {
  return (
    <TouchableOpacity>
      <StyledContainer>
        <View>
          <StyledItem>
            {item.name}: {item.id}
          </StyledItem>
        </View>
        <View>
          <StyledItemDetails>{item.description}</StyledItemDetails>
          <StyledDetailsView>
            <StyledItemDetails>QTY: {item.qty}</StyledItemDetails>
            <StyledItemDetails>LAST QTY: {item.lastQty}</StyledItemDetails>
            <StyledItemDetails>FILL CAP: {item.fillCap}</StyledItemDetails>
          </StyledDetailsView>
          <StyledItemDetails>WAREHOUSE: {item.wareHouse}</StyledItemDetails>
        </View>
        <StyledPricingView>
          <StyledPrice>{'$' + item.qty * item.price}</StyledPrice>
          <Text>
            {item.qty} x {'$' + item.price}
          </Text>
        </StyledPricingView>
      </StyledContainer>
    </TouchableOpacity>
  );
}

const StyledContainer = styled.View`
  padding: 10px;
  height: 100px
  background-color: #ededed;
  margin: 10px;
  margin-top: 40px
  border-radius: 10px
`;

const StyledItem = styled.Text`
  color: #192841;
  font-size: 20px;
  font-weight: 500
  margin-left: 10px;
  margin-top: -10px
`;

const StyledPrice = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: 600;
`;

const StyledPricingView = styled.View`
  position: absolute;
  margin-left: 80%;
  padding-top: 20px;
`;

const StyledDetailsView = styled.View`
  display: flex
  flex-direction: row;
  justify-content: flex-start
  padding-bottom: 3px
  padding-top: 3px
`;

const StyledItemDetails = styled.Text`
  color: #333
  font-size: 14px
  margin-left: 10px
  padding: 0px
  line-height: 20px
  
`;
