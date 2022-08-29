import React, {useState} from 'react';
import {TextInput, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export default function LineItem({item}) {
  const [text, setText] = useState('');

  return (
    <TouchableOpacity>
      <StyledContainer>
        <StyledOrderView>
          <StyledOrder>{item.order}</StyledOrder>
        </StyledOrderView>
        <StyledItemView>
          <StyledName>
            {item.name}: {item.id}
          </StyledName>

          <StyledItemDetails>{item.description}</StyledItemDetails>
          <StyledDetailsView>
            <StyledItemDetails>QTY: {item.qty}</StyledItemDetails>
            <StyledItemDetails>LAST QTY: {item.lastQty}</StyledItemDetails>
            <StyledItemDetails>FILL CAP: {item.fillCap}</StyledItemDetails>
          </StyledDetailsView>
          <StyledItemDetails>WAREHOUSE: {item.wareHouse}</StyledItemDetails>
        </StyledItemView>
        <StyledPricingView>
          <StyledPrice>{'$' + item.qty * item.price}</StyledPrice>
          <StyledCalculation>
            {item.qty} x {'$' + item.price}
          </StyledCalculation>
        </StyledPricingView>
      </StyledContainer>
    </TouchableOpacity>
  );
}

const StyledContainer = styled.View`
  padding: 5px;
  height: 90px;
  background-color: #ededed;
  margin: 5px;
  margin-top: 20px;
  border-radius: 10px;
`;

const StyledOrder = styled.Text`
  color: #105e26;
  font-size: 8px;
  font-weight: 600
  text-align: center;
`;

const StyledOrderView = styled.View`
  margin-top: 5px;
  width: 12px;
  border-radius: 3px;
  background-color: #fffec8;
  padding: 0px;
`;

const StyledName = styled.Text`
  color: #192841;
  font-size: 14px;
  font-weight: 500
  padding-left: 20px;
`;

const StyledPrice = styled.Text`
  color: #303030;
  font-size: 14px;
  font-weight: 600;
`;

const StyledPricingView = styled.View`
  position: absolute;
  margin-left: 280px;
  margin-top: 30px;
`;

const StyledDetailsView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const StyledItemView = styled.View`
  display: flex;
  flex-direction: column;
  padding-top: 3px;
  padding-left: 3px;
  margin-top: -20px;
`;

const StyledItemDetails = styled.Text`
  color: #333
  font-size: 12px
  line-height: 20px
  margin-left: 20px
  
`;

const StyledCalculation = styled.Text`
  font-size: 10px;
  text-align: right;
`;
