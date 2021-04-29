import React from 'react';
import styled from 'styled-components'

const Container = styled.footer`
    text-align: center;
    color:${({theme}) => theme.colors.makerLightGrey};
    background-color:${({theme}) => theme.colors.makerGreen};
    padding:16px;
`


const Footer = (props) => {

    return (
        <Container>
                Code your dream
            </Container>
    )
}

export default Footer;