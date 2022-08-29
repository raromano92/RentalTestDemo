import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <StyledText>Line Items</StyledText>
    </StyledHeader>
  );
}

const StyledHeader = styled.View`
  margin-top: 30px;
  height: 50px;
  background-color: darkslateblue;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 24px;
`;
