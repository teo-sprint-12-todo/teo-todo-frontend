import React from 'react';
import styled from 'styled-components';
import GoalElem from '../../components/GoalElem';

const GoalListBox = styled.div `
    display:flex;
    flex-direction:column;
`;

function GoalList() {
    return (<GoalListBox>
      <GoalElem/>
      <GoalElem/>
      <GoalElem/>
      <GoalElem/>
    </GoalListBox>);
}

export default GoalList;
