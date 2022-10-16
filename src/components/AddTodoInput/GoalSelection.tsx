import React from 'react'
import { GoalButton } from '../../common/Buttons';
import { TodoRequestBody } from '../../types/todo';

interface Goal {
    id: number,
    text: string;
    color: string;
}

const goalPreset: Goal[] = [
    {
        id: 1,
        text: '일상',
        color: '#5F25C9',
    },
    {
        id: 2,
        text: '운동', 
        color: '#257AC9',
    },
    {
        id: 3,
        text: '공부', 
        color: '#B225C9',
    }
]


interface Props {
    setTodo: React.Dispatch<React.SetStateAction<TodoRequestBody>>
}
function GoalSelection({ setTodo }: Props) {

    const handleClick = (goalId: number) => {
        setTodo(prev => ({
            ...prev,
            goalId,
          }))
      }

    return (
        <>
            {goalPreset.map((goal) => (<GoalButton key={goal.id} backgroundColor={goal.color} onClick={() => handleClick(goal.id)}>{goal.text}</GoalButton>))}
        </>
    )
}

export default GoalSelection