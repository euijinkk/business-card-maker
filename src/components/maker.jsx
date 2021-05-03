import React, { useEffect } from "react";
import Header from "./header";
import styled from "styled-components";
import Footer from "./footer";
import { useHistory } from "react-router";
import Cardmaker from "./cardmaker";
import Preview from "./preview";

const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  return (
    <Section>
      <Header onLogout={onLogout} />
      <Main>
        <Cardmaker />
        <Preview />
      </Main>
      <Footer />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  /* padding-top: 50px; */
  display: flex;
  flex-direction: column;
`;

const Main = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  /* height: 100%; */
  /* 100% 라고 하면 정말 화면을 다 채워버리네? */
  // 이때는 vh:100 보다도, flex:1 이 맞다!
  background-color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export default Maker;
