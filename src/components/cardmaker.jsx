import React from "react";
import styled from "styled-components";

const Cardmaker = (props) => {
  return (
    <Container>
      <h1>Card Maker</h1>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 50%;
  border-right: 1px solid lightgray;
  text-align: center;

  h1 {
    color: ${({ theme }) => theme.colors.makerGreen};
  }
`;

export default Cardmaker;
