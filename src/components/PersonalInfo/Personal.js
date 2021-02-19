import Container from '../../Container/';
import { Section } from '../Navbar/Navbar.style';
import { Label, Input, Div, Right, Left, Select } from './Personal.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Cta } from './Personal.style';

const Personal = () => {
  return (
    <>
      <Section>
        <Container>
          <Label htmlFor='name'>Name</Label>
          <Input type='text' id='name' name='name' />
          <Label htmlFor='email'>
            Email Address <span>*</span>
            <p>The purchase receipt would be sent to this address</p>
          </Label>
          <Input type='text' id='email' name='email' />
          <Label htmlFor='address1'>Address 1</Label>
          <Input type='text' id='address1' name='address1' />
          <Label htmlFor='address2'>Address 2</Label>
          <Input type='text' id='address2' name='address2' />
          <Div>
            <Right>
              <Label htmlFor='lga'>Local Government</Label>
              <Input type='text' id='lga' name='lga' />
            </Right>
            <Left>
              <Label htmlFor='state'>State</Label>
              <Select id='state'>
                <option value='LOS'>Lagos</option>
                <option value='Ogun'>Ogun</option>
                <option value='Abj'>Abuja</option>
                <option value='Enugu'>Enugu</option>
              </Select>
            </Left>
          </Div>
          <Cta>
            <NavLink to='/bill'>Next</NavLink>
            <CancelLink to='#'>Cancel Payment</CancelLink>
          </Cta>
        </Container>
      </Section>
    </>
  );
};

export default Personal;

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
