import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDocumentHeight, useOnClickOutside, useOnScreenKeyboardScrollFix } from '../../hooks';
import InputBox from './InputBox';
import Option, { OptionType } from './Option';
import SubmitButton from './SubmitButton';
import { ReactComponent as CalendarIcon } from '../../assets/calendar_icon.svg';
import { ReactComponent as GoalIcon } from '../../assets/goal_icon.svg';
import { ReactComponent as ImportanceIcon } from '../../assets/importance_icon.svg';
import { ReactComponent as CategoryIcon } from '../../assets/category_icon.svg';

const Container = styled.div<{ bottom: number; isVisible: boolean }>`
    z-index: 999;
    display: flex;
    flex-flow: column;
    opacity: ${({isVisible}) => isVisible ? 1 : 0};
    position: absolute;
    bottom: ${({isVisible, bottom}) => isVisible ? `${bottom}px` : 0};
    width: 100vw;
    background-color: #2C2C2E; 
`;


const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 0px;

`
const Bottom = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  height: 40px;
`;
const OptionContainer = styled.div`
  display: flex;
  gap: 16px;
`

interface Props {
  setIsVirtualKeyboardOpen: React.Dispatch<React.SetStateAction<boolean>>
  isVisible: boolean
}
function AddTodoInput({isVisible, setIsVirtualKeyboardOpen}: Props) {
  const [currentOption, setCurrentOption] = React.useState<OptionType | null>(null)


  const handleClickOption = (option: OptionType) => {
    setCurrentOption(option)
  }
  
  const handleSubmit = () => {
    console.log('submit todo')
    setIsVirtualKeyboardOpen(false)
  }

  const windowHeight = window.innerHeight
  const viewportHeight = useDocumentHeight()
  const virtualKeyboardHeight = windowHeight - viewportHeight

  useOnScreenKeyboardScrollFix()

  const ref = useRef(null)
  const handleClickOutside = () => {
    if (!isVisible) return
    console.log('handleClickOutside')
    setIsVirtualKeyboardOpen(false)
  }
  useOnClickOutside(ref, handleClickOutside)

  return (
    
    <Container ref={ref} bottom={virtualKeyboardHeight} isVisible={isVisible} >
      <Top>
        <InputBox setIsVirtualKeyboardOpen={setIsVirtualKeyboardOpen}/>
      </Top>
      <Bottom>
        <OptionContainer>
          <Option onClick={() => handleClickOption('importance')} ><CalendarIcon /></Option>
          <Option onClick={() => handleClickOption('importance')} ><ImportanceIcon /></Option>
          <Option onClick={() => handleClickOption('importance')} ><GoalIcon /></Option>
          <Option onClick={() => handleClickOption('importance')} ><CategoryIcon /></Option>
        </OptionContainer>
        <SubmitButton onClick={handleSubmit} />
      </Bottom>
      
    </Container>
    
  );
}

export default AddTodoInput;
