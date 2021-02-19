import styled from 'styled-components';

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 1em;
  margin-top: 1.5em;
  span {
    color: #ff0000;
  }
  p {
    font-weight: 400;
    color: rgb(116, 116, 116);
    margin-top: 0.5em;
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 1em;
  border-radius: 0.3em;
  border: 1px solid #0c0c0c;
`;

export const Div = styled.div`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3em;
  }
`;

export const Right = styled.div``;

export const Left = styled.div``;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  background: url('https://www.pngrepo.com/png/155474/512/down-arrow.png');
  background-repeat: no-repeat;
  background-size: 16px 17px;
  background-position: right;
  background-origin: content-box;
  width: 100%;
  padding: 1em;
  border-radius: 0.3em;
  background-color: #fff;
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const Cta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5em;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 3.5em;
  }
`;
