import React, {useState} from 'react';
import styled from 'styled-components';
import GoalNav from '../../components/GoalNav';
import GoalElemList from '../../components/GoalList'
import {ReactComponent as Statistics} from '../../assets/statistics.svg'

const GoalListBox = styled.div `
    display:flex;
    flex-direction:column;
    padding : 0 1.2em 4em 1.2em;
`;

const GoalHeader = styled.div`
    padding: 0.5em 1.2em 1em 1.2em;
    margin-bottom:0.5em;
    display:flex;
    justify-content:space-between;
    align-items : center;
`

const GoalTitle = styled.div`
    font-size:1.3em;
`

function GoalList() {
    const [isComplete, setIsComplete] = useState(false)

    const changeList = (comp : boolean): void => {
        setIsComplete(!comp)
    }

    return (
        <div>
            <GoalHeader>
                <GoalTitle>목표</GoalTitle>
                <Statistics />
            </GoalHeader>
            <GoalNav changeList={changeList}/>
            <GoalListBox>
                <GoalElemList complete={isComplete}/>
            </GoalListBox>
        </div>
    );
}

export default GoalList;
