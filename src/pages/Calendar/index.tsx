import React from 'react';
import FloatingActionButton from '../../common/Buttons/FloatingActionButton';
import AddTodoInput from '../../components/AddTodoInput';

function Calendar() {
  const [isVirtualKeyboardOpen, setIsVirtualKeyboardOpen] = React.useState<boolean>(false)

  const handleFocusInput = () => {
    
    const todoInput = document.getElementById('todo-input');
    todoInput?.focus();
    
    
    setIsVirtualKeyboardOpen(true)
     
    
  };

  return (
    <div>
      <AddTodoInput isVisible={isVirtualKeyboardOpen} setIsVirtualKeyboardOpen={setIsVirtualKeyboardOpen}/>
      <FloatingActionButton onClick={handleFocusInput} />
    </div>
  );
}

export default Calendar;
