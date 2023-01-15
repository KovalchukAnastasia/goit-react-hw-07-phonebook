import styled from 'styled-components';

export const PhoneBtn = styled.button`
  background-color: white;
  outline: 1px solid #000;
  justify-content: center;
  font-size: 14px;
  border: none;
  padding: 2px 3px;
  border-radius: 3px;
  width: 100px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;

  :hover {
    background-color: #c4c4c4;
  }
`;
