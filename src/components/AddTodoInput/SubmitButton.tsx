import React from 'react';
import styled from 'styled-components';
import { resetButton } from '../../style/reset';

const Button = styled.button`
  ${resetButton};
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  gap: 8px;

  
  width: fit-content;
  height: 25px;
  
  background: #00D2FA;
  border-radius: 20px;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #FFFFFF;
`;

interface Props {
  onClick: () => void
}
function SubmitButton({onClick}: Props) {
  return (
    <Button onClick={onClick}>추가하기</Button>
  );
}

export default SubmitButton;
