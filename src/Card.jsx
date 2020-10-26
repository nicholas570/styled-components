import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
  width: 25vw;
  margin: auto;
  border-radius: 50px;
  background: #9cc7e2;
  box-shadow: -20px -20px 60px #63747f, 20px 20px 60px #879eab;
`;

function Card() {
  return <Container>card</Container>;
}

export default Card;
