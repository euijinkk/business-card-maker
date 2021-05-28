import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { data } from '../common/state';
import Card from './card';

const Cardmaker = (props) => {
    const [cardData, setCardData] = useRecoilState(data);
    return (
        <Container>
            <h1>Card Maker</h1>
            {cardData.map((card) => (
                <Card card={card} />
            ))}
            <Card />
        </Container>
    );
};

const Container = styled.div`
    flex-basis: 50%;
    border-right: 1px solid lightgray;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: ${({ theme }) => theme.colors.makerGreen};
    }
`;

export default Cardmaker;
