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
  margin-top: 10px;
  margin-bottom: 20px;
  height: 40px;
  background-color: #105e26;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  color: white;
  font-size: 24px;
`;
