import styled from 'styled-components';
export default Styles;
const Styles = () => {
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
};
