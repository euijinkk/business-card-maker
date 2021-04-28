import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    /* display:flex;
    flex-direction: column;
    align-items: center; */
    width:400px;
    height: 300px;
`

const Header = styled.header`
    display:flex;
    flex-direction: column;
    align-items: center;
    
    color:${({theme}) => theme.colors.makerWhite};
    background-color:${({theme}) => theme.colors.makerGreen};
    padding:10px;
    img {
        width:60px;
    }
`

const Main = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    color:${({theme}) => theme.colors.makerBlack};
    background-color:${({theme}) => theme.colors.makerWhite};
    padding:10px;

    span{
        font-weight: 700;
        font-size:24px;
        padding-top:6px;
        padding-bottom:16px;
    }
`

const Footer = styled.footer`
    text-align: center;
    color:${({theme}) => theme.colors.makerLightGrey};
    background-color:${({theme}) => theme.colors.makerGreen};
    padding:16px;
`

const LoginLink= styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`

const GoogleLogin= styled.button`
    border: 1px solid black;
    border-radius: 20px;
    width:100%;
    margin-bottom:6px;
    height:32px;
    
    &:hover{
        background-color:${({theme}) => theme.colors.makerLightPink};
    }
`

// 상속하기
const GithubLogin= styled(GoogleLogin)`

`


const Login = (props) => {
    return(
        <Container>
            <Header>
                <img src="favicon.ico" alt=""/>
                <span>Business Card Maker</span>
            </Header>
            <Main>
                <span>Login</span>
                <LoginLink>
                    <GoogleLogin>Google</GoogleLogin>
                    <GithubLogin>Github</GithubLogin>
                </LoginLink>
            </Main>
            <Footer>
                Code your dream
            </Footer>
        </Container>
    );
};
            


export default Login;