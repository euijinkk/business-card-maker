import React from 'react';
import styled from 'styled-components'

const Container = styled.header`
    display:flex;
    flex-direction: column;
    align-items: center;
    
    color:${({theme}) => theme.colors.makerWhite};
    background-color:${({theme}) => theme.colors.makerGreen};
    padding:10px;
    font-weight: 700;
        font-size:24px;
    img {
        width:60px;
    }
`   

const Header = (props) => {
    
    return (
        <Container>
            <img src="favicon.ico" alt=""/>
            <span>Business Card Maker</span>
        </Container>
    )
};

export default Header;