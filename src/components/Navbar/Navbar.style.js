import styled from 'styled-components';

export const Section = styled.section`
  padding: 1em 0;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #0c0c0c;
`;

export const H1 = styled.h1`
  margin-bottom: 1.5em;
  font-size: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 280px) {
    font-size: 1rem;
  }
`;

export const Li = styled.li`
  margin-bottom: 0.5em;
`;
