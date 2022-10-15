import React from 'react';
import styled from 'styled-components';
import TodoListElem from '../../components/TodoListElem';

const TodoListBox = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.8em;
`;

export interface Item {
  importance: number,
  context: string
}

const lst: Item[] = [
  {
    importance: 0,
    context: 'Loeam Ipsum',
  }, {
    importance: 1,
    context: 'Loeam Ipsum',
  }, {
    importance: 2,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  }, {
    importance: 3,
    context: 'Loeam Ipsum',
  },
];

function MainTodoList() {
  const TodoList = lst.map((item) => (
    <TodoListElem
      key={item.importance}
      importance={item.importance}
      context={item.context}
    />
  ));

  return (
    <div>
      <TodoListBox>{TodoList}</TodoListBox>

    </div>
  );
}

export default MainTodoList;
