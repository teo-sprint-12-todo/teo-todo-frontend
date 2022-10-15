import React, {useState} from 'react'
import styled from 'styled-components'
import type {Item} from '../pages/MainTodoList'
import checked from '../assets/checked.png'

const ElemHeader = styled.div<{complete:boolean}>`
    background-color : ${(props)=>(props.complete ? "#8E8E93": "#81d6f5")} ;
    height:inherit;
    width:8px;
    border-radius : 5px 0 0 5px;
`;

const ElemContent = styled.div<{complete:boolean}>`
    background-color : ${(props)=>(props.complete ? "#D8D8DC": "#fff")} ;
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

const CheckLabel = styled.label``

const Check = styled.input`
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
    };
`

function TodoListElem(item: Item) {
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const {importance, context} = item

    const onCheck = (e:React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
    }

    return (
        <Element>
            <ElemHeader complete={isChecked} />
            <ElemContent complete={isChecked}>
                <Content>
                    <CheckLabel htmlFor="contentCheck">{context}</CheckLabel>
                    <Check type="checkbox" name="contentCheck" onChange={onCheck} />
                </Content>
            </ElemContent>
        </Element>
    )
}

export default TodoListElem