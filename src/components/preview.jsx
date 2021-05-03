import React from "react";
import styled from "styled-components";

const Preview = (props) => {
  return (
    <Container>
      <h1>Card Preview</h1>
    </Container>
  );
};

const Container = styled.div`
  flex-basis: 50%;
  text-align: center;
  h1 {
    color: ${({ theme }) => theme.colors.makerGreen};
  }
`;

export default Preview;
