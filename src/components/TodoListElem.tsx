import React, {useState} from 'react'
import styled from 'styled-components'
import {Item} from '../pages/MainTodoList'
import checked from '../assets/checked.png'

const ElemHeader = styled.div<{complete:boolean}> `
    background-color : ${(props)=>(props.complete ? "#8E8E93": "#81d6f5")} ;
    height:inherit;
    width:8px;
    border-radius : 5px 0 0 5px;
`

const ElemContent = styled.div<{complete:boolean}> `
    background-color : ${(props)=>(props.complete ? "#D8D8DC": "#fff")} ;
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

const Check_label = styled.label ``

const Check = styled.input `
    appearance:none;
    width:1.5em;
    height:1.5em;
    border-radius:1em;
    border: solid #8e8e93 3px;
    background-color:#ebebf0;

    &:checked{
        border-color:transparent;
        background-color:#2c2c2e;
        background-image: url(${checked});
        background-size : 80% 80%;
        background-position:50% 60%;
        background-repeat:no-repeat;
    }
`

export const TodoListElem = (item : Item) => {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const {importance, context} = item

    const onCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
    }

    return (
        <Element>
            <ElemHeader complete={isChecked}></ElemHeader>
            <ElemContent complete={isChecked}>
                <Content>
                    <Check_label htmlFor="contentCheck">{context}</Check_label>
                    <Check type="checkbox" name="contentCheck" onChange={onCheck}></Check>
                </Content>
            </ElemContent>
        </Element>
    )
}