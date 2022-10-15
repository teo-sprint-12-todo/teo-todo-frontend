import React from 'react';
import styled from 'styled-components';
import type { Item } from '../pages/MainTodoList';

const ElemHeader = styled.div`
    background-color : black;
    height:inherit;
    width:3%;
    border-radius : 5px 0 0 5px;
`;

const ElemContent = styled.div`
    background-color : #cfcfcf;
    width : 100%;
    display:flex;
    align-items : center;
    padding : 1em
`;

const Element = styled.div`
    display : flex;
    height : 10vh;
`;

const Content = styled.div`
    display : flex;
    width : 100%;
    justify-content :space-between;
`;

const CheckLabel = styled.label``;

const Check = styled.input`
    width:2em;
    border: solid black 5px;    
    `;

function TodoListElem(item:Item) {
  const { importance, context } = item;

  return (
    <Element>
      <ElemHeader />
      <ElemContent>
        <Content>
          <CheckLabel
            htmlFor="contentCheck"
          >
            {context}
          </CheckLabel>
          <Check
            type="checkbox"
            name="contentCheck"
          />
        </Content>
      </ElemContent>
    </Element>
  );
}

export default TodoListElem;
