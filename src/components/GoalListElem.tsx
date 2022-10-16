import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import type {GoalListItem}
from '../types/dummy';
import checked from '../assets/checked.png';
import type {PriorityLevel}
from '../common/Buttons/ImportanceButton';

const ElemHeader = styled.div < {
    complete: boolean
} > `
  background-color: ${ (props) => (
    props.complete
        ? '#8E8E93'
        : '#81d6f5'
)};
  height: inherit;
  width: 8px;
  border-radius: 5px 0 0 5px;
`;

const ElemContent = styled.div < {
    complete: boolean
} > `
  background-color: ${ (props) => (
    props.complete
        ? '#D8D8DC'
        : '#fff'
)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

const Element = styled.div `
  display: flex;
  height: 15vh;
`;

const Content = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const CheckLabel = styled.label ``;

const Check = styled.input `
  appearance: none;
  width: 1.5em;
  height: 1.5em;
  border-radius: 1em;
  border: solid #8e8e93 3px;
  background-color: #ebebf0;

  &:checked {
    border-color: transparent;
    background-color: #2c2c2e;
    background-image: url(${checked});
    background-size: 80% 80%;
    background-position: 50% 60%;
    background-repeat: no-repeat;
  }
`;

/** Tags */
// TODO: 값 읽어와서 태그 추가
const Tags = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const high = css `
  background: #fce2e5;
  border: 1px solid #e4566e;
  color: #d11136;
`;

const medium = css `
  background: #fceee2;
  border: 1px solid #e48956;
  color: #e85300;
`;

const low = css `
  background: #d5f6de;
  border: 1px solid #71ff7d;
  color: #068f10;
`;

const handlePriority = (priority : PriorityLevel) => {
    switch (priority) {
        case 'high':
            return high;
        case 'medium':
            return medium;
        case 'low':
            return low;
        default:
            return medium;
    }
};

const Priority = styled.div < {
    priority: PriorityLevel
} > `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  gap: 10px;
  margin: 0;
  width: fit-content;
  height: 20px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 10px;
  line-height: 160%;
  letter-spacing: -0.01em;

  ${ ({
    priority}) => handlePriority(priority)}
`;

    const Goal = styled.div < {
        backgroundColor: string
    } > `
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  gap: 10px;

  min-width: 34px;
  width: fit-content;
  height: 20px;
  margin: 0;
  background: ${ ({
        backgroundColor}) => backgroundColor};
  border: none;
  border-radius: 2px;

  font-weight: 600;
  font-size: 10px;
  line-height: 160%;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
`;

function GoalListElem({context, isComplete} : GoalListItem) {
    return (<Element> < ElemHeader complete = {
        isComplete
    } /> <ElemContent complete = {
        isComplete
    } > <Tags> < Goal backgroundColor = "green" > 일상</Goal> < Priority priority = "high" > 중요</Priority></Tags><Content> < CheckLabel htmlFor = "contentCheck" > {
        context
    }</CheckLabel> {
        isComplete
            ? <Check type = "checkbox" name = "contentCheck" checked />:null
    }</Content></ElemContent></Element>);
}

export default GoalListElem;
