import React, { useEffect } from "react";
import Header from "./header";
import styled from "styled-components";
import Footer from "./footer";
import { useHistory } from "react-router";

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

      <Footer />
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: 100%;
  /* padding-top: 50px; */
`;

export default Maker;
