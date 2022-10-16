import React, {useState} from 'react';
import styled from 'styled-components';
import GoalElem from '../../components/GoalElem';
import GoalNav from '../../components/GoalNav';

export interface Goal {
    "id" : number,
    "categoryId" : number,
    "name" : string,
    "startDate" : string,
    "endDate" : string,
    "complete" : number,
    "incomplete" : number
}

const GoalListBox = styled.div `
    display:flex;
    flex-direction:column;
    padding: 0 1.2em;
`;

const lst: Goal[] = [
    {
        "id": 1,
        "categoryId": 2,
        "name": "추가하는 목표",
        "startDate": "2022-10-21",
        "endDate": "2022-10-21",
        "complete": 5,
        "incomplete": 3
    }, {
        "id": 2,
        "categoryId": 1,
        "name": "수정 목표222",
        "startDate": "2022-10-21",
        "endDate": "2022-11-21",
        "complete": 85,
        "incomplete": 73
    }, {
        "id": 3,
        "categoryId": 2,
        "name": "추가하는 목표222",
        "startDate": "2022-10-21",
        "endDate": "2022-10-21",
        "complete": 52,
        "incomplete": 743
    }
]

function GoalList() {
    const [isComplete, setIsComplete] = useState<boolean>(false)

    const GoalElemList = lst.map((item) => <GoalElem key = {
        item.id
    }
    id = {
        item.id
    }
    categoryId = {
        item.categoryId
    }
    name = {
        item.name
    }
    startDate = {
        item.startDate
    }
    endDate = {
        item.endDate
    }
    complete = {
        item.complete
    }
    incomplete = {
        item.incomplete
    } />)

    const changeList = (comp : boolean): void => {
        setIsComplete(!comp)
    }

    return (<div> < GoalNav isComplete = {
        isComplete
    }
    changeList = {
        changeList
    } /> {
        isComplete
            ? <div>aa</div>
            : <GoalListBox> {
                GoalElemList
            }</GoalListBox>
    }</div>);
}

export default GoalList;
