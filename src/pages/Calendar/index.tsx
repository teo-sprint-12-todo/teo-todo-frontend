import React from 'react';
import FloatingActionButton from '../../common/Buttons/FloatingActionButton';
import { TodoInputBox } from '../../components/AddTodoInput';

function Calendar() {
  const [isVirtualKeyboardOpen, setIsVirtualKeyboardOpen] = React.useState<boolean>(false)

  const handClickAddTodo = () => {
  }
  const handleFocusInput = () => {

    const todoInput = document.getElementById('todo-input');
    todoInput?.focus();


    setIsVirtualKeyboardOpen(true)


  };

  return (
    <div />
  );
}

export default Calendar;
