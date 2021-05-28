import React from "react";
import styled from "styled-components";

const Header = ({ onLogout }) => {
  return (
    <Container>
      <img src="favicon.ico" alt="" />
      <span>Business Card Maker</span>
      {onLogout && <button onClick={onLogout}>Logout</button>}
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.makerWhite};
  background-color: ${({ theme }) => theme.colors.makerGreen};
  padding: 10px;
  font-weight: 700;
  font-size: 24px;
  position: relative;
  img {
    width: 60px;
  }
  button {
    position: absolute;
    right: 3em;
    top: 20px;
    padding: 0.8em;
    border-radius: 20%;
    background-color: ${({ theme }) => theme.colors.makerBlack};
    outline: 0;
    border: 0;
    cursor: pointer;
    color: white;
  }

  @media screen and (min-width: 600px) {
    padding-top: 20px;
  }
`;

export default Header;
