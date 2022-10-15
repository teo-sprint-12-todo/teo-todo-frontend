import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import type { PriorityLevel } from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: fit-content;
    padding: 16px 45px 24px 16px;
    gap: 8px;

    background: #1C1C1E;
    border-radius: 8px;
`;

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

function PrioritySelectionModal() {
  return (
    <Container>
      {priorityArray.map(({ level, text }) => (
        <Button key={level} priority={level}>{text}</Button>
      ))}
    </Container>
  );
}

export default PrioritySelectionModal;
