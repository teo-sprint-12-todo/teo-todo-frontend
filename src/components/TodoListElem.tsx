import React from 'react'
import styled from 'styled-components'

interface ContextsProps{
    item:object;
}

const ElemHeader = styled.div `
    background-color : black;
    height:inherit;
    width:3%;
    border-radius : 5px 0 0 5px;
`

const ElemContent = styled.div `
    background-color : #cfcfcf;
    width : 100%;
    display:flex;
    align-items : center;
    padding : 1em
`

const Element = styled.div `
    display : flex;
    height : 10vh;
`

const Content = styled.div `
    display : flex;
    width : 100%;
    justify-content :space-between;
`

const Check_label = styled.label``

const Check = styled
    .input`
    width:2em;
    border: solid black 5px;
`

interface Item {
    importance : number,
    context : string
}

export const TodoListElem = ({item}:ContextsProps) => {
    // const {importance, context}:Item = item

    return (
        <Element>
            <ElemHeader></ElemHeader>
            <ElemContent>
                <Content>
                    <Check_label
                        htmlFor = "contentCheck"
                    >{}</Check_label>
                    <Check
                        type = "checkbox"
                        name = "contentCheck"
                    ></Check>
                </Content>
            </ElemContent>
        </Element>
    )
}