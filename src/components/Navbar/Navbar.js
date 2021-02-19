import Container from '../../Container';
import { Section, Nav, Ul, Li, H1 } from './Navbar.style';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <>
      <Section>
        <Container>
          <Nav>
            <H1>Complete your purchase</H1>
            <Ul>
              <Li className='space__left'>
                <NavLink to='/'>Personal Info</NavLink>
              </Li>
              <Li className='space__left'>
                <NavLink to='/bill'>Billing Info</NavLink>
              </Li>
              <Li className='space__left'>
                <NavLink to='/pay'>Confirm Payment</NavLink>
              </Li>
            </Ul>
          </Nav>
        </Container>
      </Section>
    </>
  );
};

export default Navbar;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #0c0c0c;
`;
