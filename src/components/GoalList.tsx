import React from 'react';
import GoalElem from './GoalElem';

export interface GoalData {
    "id" : number,
    "categoryId" : number,
    "name" : string,
    "startDate" : string,
    "endDate" : string,
    "complete" : number,
    "incomplete" : number,
}

export interface Goal {
    "id" : number,
    "categoryId" : number,
    "name" : string,
    "startDate" : string,
    "endDate" : string,
    "complete" : number,
    "incomplete" : number,
    isCom : boolean
}

interface Complete {
    complete: boolean;
}

const comlst: GoalData[] = [
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
        "incomplete": 3
    }, {
        "id": 3,
        "categoryId": 2,
        "name": "추가하는 목표222",
        "startDate": "2022-10-21",
        "endDate": "2022-10-21",
        "complete": 2,
        "incomplete": 7
    }
]

const lst: GoalData[] = [
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

function GoalElemList({complete} : Complete) {
    const goalLst = (complete?comlst:lst).map(
        (item) => <GoalElem
            key={item.id
}
            id={item.id
}
            categoryId={item.categoryId
}
            name={item.name
}
            startDate={item.startDate
}
            endDate={item.endDate
}
            complete={item.complete
}
            incomplete={item.incomplete
}
            isCom={complete}
/>
    )

    return <div>{goalLst}</div>
}

export default GoalElemList;