import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { data } from '../common/state';

const Card = ({ card }) => {
    const [cardData, setCardData] = useRecoilState(data);
    const onDeleteData = () => {
        setCardData(cardData.filter((cardItem) => cardItem !== card));
    };
    const onAddData = (e) => {
        const name = e.target.parentNode.children[0].children[0].value;
        const work = e.target.parentNode.children[1].children[0].value;
        const color = e.target.parentNode.children[2].children[0].value;
        const job = e.target.parentNode.children[3].children[0].value;
        const email = e.target.parentNode.children[4].children[0].value;
        const paragraph =e.target.parentNode.children[5].children[0].value;
        setCardData([...cardData, {name: name, work: work, color: color, job:job, email: email, paragraph:paragraph}]);
        Array.from(e.target.parentNode.children).filter(item => item.children[0]).map(item => item.children[0].value="");
    };
    return (
        <CardWrap card={card}>
            {card ? (
                <>
                    <span className="box">{card.name}</span>
                    <span className="box">{card.work}</span>
                    <span className="box">{card.color}</span>
                    <span className="box">{card.job}</span>
                    <span className="box">{card.email}</span>
                    <span className="box">{card.paragraph}</span>
                    <span className="box">123</span>
                    <span className="box" onClick={onDeleteData}>
                        Delete
                    </span>
                </>
            ) : (
                <>
                    <span className="box">
                        <input type="text" placeholder="Name"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="Company"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="Light"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="Title"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="Email"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="Message"></input>
                    </span>
                    <span className="box">
                        <input type="text" placeholder="No file"></input>
                    </span>
                    <span className="box" onClick={onAddData}>
                        Add
                    </span>
                </>
            )}
        </CardWrap>
    );
};

export default Card;

const CardWrap = styled.section`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(6, 16.6%);
    grid-template-rows: repeat(4, 35px);
    margin-bottom: 20px;
    input {
        outline: 0;
        border: 0;
        background-color: transparent;
    }

    .box {
        border: 1px solid black;
        display: flex;
        /* justify-content: center; */
        padding-left: 10px;
        align-items: center;
        color: ${({ theme, card }) =>
            card ? 'black' : theme.colors.makerLightGrey};
    }
    .box:nth-child(1) {
        grid-column: 1/3;
    }
    .box:nth-child(2) {
        grid-column: 3/5;
    }
    .box:nth-child(3) {
        grid-column: 5/7;
    }
    .box:nth-child(4) {
        /* grid-row:2/3; */
        grid-column: span 3;
    }
    .box:nth-child(5) {
        grid-column: span 3;
    }
    .box:nth-child(6) {
        grid-column: span 6;
    }
    .box:nth-child(7) {
        grid-column: span 3;
        /* color: {{props} => props.card ? {theme} => theme.colors.makermakerLightPink : } */
        background-color: ${({ card, theme }) =>
            card ? theme.colors.makerLightPink : theme.colors.makerLightGrey};
        color: black;
        font-weight: bold;
    }
    .box:nth-child(8) {
        grid-column: span 3;
        background-color: ${({ theme }) => theme.colors.makerGreen};
        color: white;
        font-weight: bold;
    }
`;
