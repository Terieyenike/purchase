import { useState } from 'react';
import Container from '../../Container/';
import { Section } from '../Navbar/Navbar.style';
import { Label, Input, Select, Cta } from '../PersonalInfo/Personal.style';
import {
  Div,
  Box,
  BoxTop,
  Main,
  MainData,
  Shipping,
  DivContainer,
} from './Bill.style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Bill = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log('clicked');
  };

  let showPayment;
  if (isSubmitted) {
    showPayment = (
      <Box>
        <DivContainer>
          <BoxTop>
            <p>Item Name</p>
            <p>Price</p>
          </BoxTop>

          <Main>
            <MainData>
              <p>Data science and usability</p>
              <p>50000.00</p>
            </MainData>
            <Shipping>
              <p>Shipping</p>
              <p>0.00</p>
            </Shipping>
          </Main>
        </DivContainer>
      </Box>
    );
  } else {
    showPayment = (
      <Container>
        <Label htmlFor='card'>
          Name on Card <span>*</span>
        </Label>
        <Input type='text' id='card' name='card' />
        <Label htmlFor='cardtype'>
          Card Type <span>*</span>
        </Label>
        <Select id='cardtype'>
          <option value='visa'>Visa</option>
          <option value='mastercard'>Master Card</option>
        </Select>

        <Div>
          <div>
            <Label htmlFor='details'>
              Card details <span>*</span>
            </Label>
            <Input type='text' id='details' name='details' />
          </div>
          <div>
            <Label htmlFor='expiry'>
              Expiry date <span>*</span>
            </Label>
            <Input type='text' id='expiry' name='expiry' />
          </div>
          <div className='cvv'>
            <Label htmlFor='cvv'>
              CVV <span>*</span>
            </Label>
            <Input type='text' id='cvv' name='cvv' />
          </div>
        </Div>
        <Cta>
          <NavLink to='#' onClick={handleSubmit}>
            Next
          </NavLink>
          <CancelLink to='#'>Cancel Payment</CancelLink>
        </Cta>
      </Container>
    );
  }

  return (
    <>
      <Section>{showPayment}</Section>
    </>
  );
};

export default Bill;

const NavLink = styled(Link)`
  width: 100%;
  padding: 1em;
  text-align: center;
  color: #f7f7ff;
  background: linear-gradient(180deg, #f2c94c 0%, #f2994a 100%);
  font-weight: bold;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;

const CancelLink = styled(Link)`
  width: 100%;
  margin-left: 15px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    margin-left: 50px;
  }
`;
