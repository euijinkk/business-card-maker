import { atom } from 'recoil';

const data = atom({
    key: 'data',
    default: [
        {
            name: 'EuiJin Kim',
            work: 'CAU',
            job: 'FrontEnd Engineer',
            email: 'gytks4@naver.com',
            paragraph: 'Seize the day',
            color: 'Light',
        },
        {
            name: 'SoRyeong Kim',
            work: 'CAU',
            job: 'FrontEnd Engineer',
            email: 'gytks4@naver.com',
            paragraph: 'Seize the day',
            color: 'Light',
        },
        {
            name: 'Jiyeong Hyeon',
            work: 'CAU',
            job: 'FrontEnd Engineer',
            email: 'gytks4@naver.com',
            paragraph: 'Seize the day',
            color: 'Light',
        },
    ],
});

export {data};