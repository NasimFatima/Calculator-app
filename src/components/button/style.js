import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex: 0 1 25%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border: 1px solid black;
  border-top: none;
  border-left: none;
  cursor: pointer;
  background: -webkit-linear-gradient(top, #d2d2d2, #ddd);
  font-size: 2em;
`;

export default StyledButton;
