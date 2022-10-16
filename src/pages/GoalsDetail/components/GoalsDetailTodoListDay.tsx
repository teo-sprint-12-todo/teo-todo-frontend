import React from 'react';
import styled from 'styled-components';
import GoalListElem from '../../../components/GoalListElem';
import {lst} from '../../../types/dummy';

const Container = styled.div `
  margin:1em 0 4em 0;
  display:flex;
  flex-direction:column;
  gap:0.8em;
`

const Date = styled.div `
  color:#3A3A3C;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: -0.01em;
`

function GoalsDetailTodoListDay() {
    const GoalList = lst.map((item) => (
        <GoalListElem
            key={item.importance}
            importance={item.importance}
            context={item.context}
            isComplete={item.isComplete}
            />
    ));

    return (
        <Container>
            <Date>10월 17일 (월)</Date>
            {GoalList}
        </Container>
    );
}

export default GoalsDetailTodoListDay;