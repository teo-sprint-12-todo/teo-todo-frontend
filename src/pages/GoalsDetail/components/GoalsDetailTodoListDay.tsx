import React from 'react';
import styled from 'styled-components';
import TodoListElem from '../../../components/TodoListElem';

const Container = styled.div`
  margin-top:16px;
`

const Date = styled.div`
  color:#3A3A3C;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: -0.01em;
`

const TodoListContainer = styled.div`
  margin-top:14px;
`

function GoalsDetailTodoListDay() {
  return (
    <Container>
      <Date>10월 17일 (월)</Date>
      <TodoListContainer>
        <TodoListElem importance={0} context='Loeam Ipsum' />
        <TodoListElem importance={0} context='Loeam Ipsum' />
      </TodoListContainer>
    </Container>
  );
}

export default GoalsDetailTodoListDay;