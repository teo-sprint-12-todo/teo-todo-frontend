import React from 'react';
import { ImportanceButton } from '../../common/Buttons';
import { PriorityLevel } from '../../common/Buttons/ImportanceButton';
import { TodoRequestBody } from '../../types/todo';


interface Priority {
    text: string;
    level: PriorityLevel
    importance: number
  }
  const priorityArray: Priority[] = [
    {
      text: '매우 중요',
      level: 'high',
      importance: 2,
    },
    {
      text: '중요',
      level: 'medium',
      importance: 1
    },
    {
      text: '약간 중요',
      level: 'low',
      importance: 0
    },
  ];


interface Props {
  setTodo: React.Dispatch<React.SetStateAction<TodoRequestBody>>
}
function ImportanceSelection({ setTodo }: Props) {
  const handleClick = (importance: number) => {
    setTodo(prev => ({
        ...prev,
        importance,
      }))
  }
    return (
        <>
          {priorityArray.map(({ level, text, importance }) => (
            <ImportanceButton key={level} priority={level} onClick={() => handleClick(importance)}>{text}</ImportanceButton>
          ))}
        </>
    )
}

export default ImportanceSelection