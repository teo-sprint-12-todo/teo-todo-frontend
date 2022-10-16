import React from 'react';
import styled from 'styled-components';
import { TodoRequestBody } from '../../types/todo';

const Container = styled.div`
  display: flex;  
  width: 100%;
`
const Left = styled.div`
  width: 4px;
  height: 50px;      
  background: #81D6F5;
  border-radius: 8px 0px 0px 8px;
`

const Input = styled.input`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
  height: 50px;
  border: none;
  background: #E1F5FC;
  color: #0E0E0F;
  &::placeholder { /* Chrome,' Firefox, Opera, Safari 10.1+ */
    color: #2DBAE5;
    opacity: 1; /* Firefox */
  }
`;



interface Props {
  todoText: string
  setTodo: React.Dispatch<React.SetStateAction<TodoRequestBody>>
}
function InputBox({todoText, setTodo}: Props) {

  const handleChange = (event: { target: { value: string }; }) => {
    
    setTodo(prev => ({
        ...prev,
        text: event.target.value
      }))
  };

  return (
    <Container>
      <Left />
      <Input id="todo-input" placeholder="할일을 입력하세요!" type="text" inputMode='text' onChange={handleChange} value={todoText}/>
    </Container>
  );
}

export default InputBox;
