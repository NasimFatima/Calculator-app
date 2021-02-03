import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 60%;
  min-width: 500px;

  p {
    color: blue;
    font-size: 35px;
    align-items: center;
    width: 100%
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
`;
