import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
  color: #AEAEB2;

  font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 16px;
/* identical to box height */

letter-spacing: -0.01em;

color: #AEAEB2;

  &[type="text"], textarea {
      background-color: #2C2C2E;
    }
`;


interface Props {
  setIsVirtualKeyboardOpen: React.Dispatch<React.SetStateAction<boolean>>
}
function InputBox({setIsVirtualKeyboardOpen}: Props) {
  const handleBlur = (e: any) => {
    
    e.stopImmediatePropagation();
    e.preventDefault();
    
    console.log('input blur')
    
  }
  return (
    <Input id="todo-input" placeholder="할일을 입력하세요!" type="text" onBlur={(e) =>handleBlur(e)} />
  );
}

export default InputBox;
