import React from 'react';
import styled from 'styled-components'
import {TodoListElem} from '../../components/TodoListElem';

const TodoListBox = styled.div `
    display:flex;
    flex-direction:column;
    gap:0.8em;
`

const lst:{importance:number, context:string}[] = [
    {   
        importance:0,
        context: "Loeam Ipsum"
    }, {
        importance:1,
        context: "Loeam Ipsum"
    }, {
        importance:2,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }, {
        importance:3,
        context: "Loeam Ipsum"
    }
]

export const MainTodoList = () => {

    const TodoList = lst.map(item =>
        <TodoListElem item={item} />
    )

    return (
        <div>
            <TodoListBox>{TodoList}</TodoListBox>
            
        </div>
    )
}