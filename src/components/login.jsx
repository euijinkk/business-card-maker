import React, { useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Login = ({ authService }) => {
  const history = useHistory();
  const goToMaker = (userId) => {
    history.push({
      pathname: "/maker",
      state: { id: userId },
    });
  };
  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent)
      .then((data) => goToMaker(data.user.uid));
  };
  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToMaker(user.uid);
    });
  });
  return (
    <Container>
      <Header />
      <Main>
        <span>Login</span>
        <LoginLink>
          <GoogleLogin onClick={onLogin}>Google</GoogleLogin>
          <GithubLogin onClick={onLogin}>Github</GithubLogin>
        </LoginLink>
      </Main>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  /* display:flex;
    flex-direction: column;
    align-items: center; */
  width: 500px;
  height: 400px;
`;

const Main = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.makerBlack};
  background-color: ${({ theme }) => theme.colors.makerWhite};
  padding: 10px;

  span {
    font-weight: 700;
    font-size: 24px;
    padding-top: 6px;
    padding-bottom: 16px;
  }
`;

const LoginLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const GoogleLogin = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 6px;
  height: 32px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.makerLightPink};
  }
`;

// 상속하기
const GithubLogin = styled(GoogleLogin)``;

export default Login;
