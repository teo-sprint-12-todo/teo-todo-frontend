import React from 'react';
import styled from 'styled-components';
import { useDocumentHeight, useOnScreenKeyboardScrollFix } from '../../hooks';
import Option, { OptionType } from './Option';
import SubmitButton from './SubmitButton';
import { ReactComponent as CalendarIcon } from '../../assets/calendar_icon.svg';
import { ReactComponent as GoalIcon } from '../../assets/goal_icon.svg';
import { ReactComponent as ImportanceIcon } from '../../assets/importance_icon.svg';
import { ReactComponent as CategoryIcon } from '../../assets/category_icon.svg';
import GoalSelection from './GoalSelection';
import ImportanceSelection from './ImportanceSelection';
import { TodoRequestBody } from '../../types/todo';

const Container = styled.div<{ bottom: number }>`
    z-index: 999;
    display: flex;
    flex-flow: column;
    gap: 12px;
    padding: 12px 20px 20px;
    position: fixed;
    bottom: ${({ bottom }) => `${bottom}px`};
    width: 100vw;
    background-color: #2C2C2E; 
    `;


const Top = styled.div`
  display: flex;
  flex-flow: row;
  gap: 12px;
`

const Bottom = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  
`
const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
interface Props {
  onSubmit: () => void
  setTodo: React.Dispatch<React.SetStateAction<TodoRequestBody>>
}
function OptionsAndSubmit({ onSubmit, setTodo }: Props) {
  const [currentOption, setCurrentOption] = React.useState<OptionType>(null)


  const handleClickOption = (option: OptionType) => {
    setCurrentOption(option)
  }


  const windowHeight = window.innerHeight
  const viewportHeight = useDocumentHeight()
  const virtualKeyboardHeight = windowHeight - viewportHeight

  useOnScreenKeyboardScrollFix()


  const renderOption = () => {
    switch (currentOption) {
      case 'calendar':
        return null
      case 'goal':
        return <GoalSelection setTodo={setTodo}/>
      case 'importance':
        return <ImportanceSelection setTodo={setTodo}/>
      default:
        return null
    }
  }
  return (

    <Container bottom={virtualKeyboardHeight} >
      {currentOption && <Top>{renderOption()}</Top>}
      <Bottom>
        <OptionContainer>
          <Option onClick={() => handleClickOption(null)} ><CalendarIcon /></Option>
          <Option onClick={() => handleClickOption('importance')} ><ImportanceIcon /></Option>
          <Option onClick={() => handleClickOption('goal')} ><GoalIcon /></Option>
          <Option onClick={() => handleClickOption(null)} ><CategoryIcon /></Option>
        </OptionContainer>
        <SubmitButton onClick={onSubmit} />
      </Bottom>
    </Container>


  );
}

export default OptionsAndSubmit;
