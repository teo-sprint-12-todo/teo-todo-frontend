import React from 'react';
import GoalElem from './GoalElem';

export interface Goal {
  "id" : number,
  "categoryId" : number,
  "name" : string,
  "startDate" : string,
  "endDate" : string,
  "complete" : number,
  "incomplete" : number
}

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

export const GoalElemList = lst.map((item) => <GoalElem key = {
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