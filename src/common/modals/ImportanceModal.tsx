import React from 'react';
import ImportanceButton, { PriorityLevel } from '../Buttons/ImportanceButton';

import ModalBase from './ModalBase';

interface Priority {
  text: string;
  level: PriorityLevel
}

const priorityArray: Priority[] = [
  {
    text: '매우 중요',
    level: 'high',
  },
  {
    text: '중요',
    level: 'medium',
  },
  {
    text: '약간 중요',
    level: 'low',
  },
];

function ImportanceModal() {
  return (
    <ModalBase>
      {priorityArray.map(({ level, text }) => (
        <ImportanceButton key={level} priority={level}>{text}</ImportanceButton>
      ))}
    </ModalBase>
  );
}

export default ImportanceModal;
