import React, {useState} from 'react';
import styled from 'styled-components';
import GoalNav from '../../components/GoalNav';
import GoalElemList from '../../components/GoalList'

const GoalListBox = styled.div `
    display:flex;
    flex-direction:column;
    padding: 0 1.2em;
`;

function GoalList() {
    const [isComplete, setIsComplete] = useState(false)

    const changeList = (comp : boolean): void => {
        setIsComplete(!comp)
    }

    return (
        <div>
            <GoalNav changeList={changeList}/>
            <GoalListBox>
                <GoalElemList complete={isComplete}/>
            </GoalListBox>
        </div>
    );
}

export default GoalList;
