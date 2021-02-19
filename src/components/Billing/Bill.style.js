import styled from 'styled-components';

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 45px;
  }
`;

export const Box = styled.div`
  /* background: red; */
  border-radius: 10px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.2);
  background: #2f80ed;
  margin: 0 auto;
  max-width: 756px;
  width: 85%;
  padding: 1em 0 0;
`;

export const BoxTop = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
`;
export const Main = styled.div`
  background: white;
  height: 150px;
`;
export const MainData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Shipping = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivContainer = styled.div`
  /* text-align: center; */
`;
