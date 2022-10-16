import React from 'react';
import styled from 'styled-components';
import { useDocumentHeight, useOnScreenKeyboardScrollFix } from '../../hooks';
import Option, { OptionType } from './Option';
import SubmitButton from './SubmitButton';
import { ReactComponent as CalendarIcon } from '../../assets/calendar_icon.svg';
import { ReactComponent as GoalIcon } from '../../assets/goal_icon.svg';
import { ReactComponent as ImportanceIcon } from '../../assets/importance_icon.svg';
import { ReactComponent as CategoryIcon } from '../../assets/category_icon.svg';

const Container = styled.div<{ bottom: number }>`
    z-index: 999;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    padding: 12px 20px 20px;
    position: absolute;
    bottom: ${({ bottom }) => `${bottom}px`};
    width: 100vw;
    background-color: #2C2C2E; 
`;

const OptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

interface Props {
  onSubmit: () => void
}
function OptionsAndSubmit({ onSubmit }: Props) {
  const [currentOption, setCurrentOption] = React.useState<OptionType | null>(null)


  const handleClickOption = (option: OptionType) => {
    setCurrentOption(option)
  }

  const handleSubmit = () => {
    onSubmit()
    console.log('submit todo')
    
  }

  const windowHeight = window.innerHeight
  const viewportHeight = useDocumentHeight()
  const virtualKeyboardHeight = windowHeight - viewportHeight

  useOnScreenKeyboardScrollFix()

  return (
    <Container bottom={virtualKeyboardHeight} >
      <OptionContainer>
        <Option onClick={() => handleClickOption('importance')} ><CalendarIcon /></Option>
        <Option onClick={() => handleClickOption('importance')} ><ImportanceIcon /></Option>
        <Option onClick={() => handleClickOption('importance')} ><GoalIcon /></Option>
        <Option onClick={() => handleClickOption('importance')} ><CategoryIcon /></Option>
      </OptionContainer>
      <SubmitButton onClick={handleSubmit} />
    </Container>

  );
}

export default OptionsAndSubmit;
