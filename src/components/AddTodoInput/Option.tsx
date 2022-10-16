import React from 'react';
import styled from 'styled-components';
import { resetButton } from '../../style/reset';

const Button = styled.button`
  ${resetButton};
  width: 16px;
  height: 16px;
`

export type OptionType = 'calendar' | 'goal' | 'importance' | null

interface Props {
  children: React.ReactNode
  onClick: () => void
}
function Option({children, onClick}: Props) {
  return (
    <Button onClick={onClick}>
      {children}
    </Button>
  );
}
export default Option;
