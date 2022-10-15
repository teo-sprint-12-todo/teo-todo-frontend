import styled, { css } from 'styled-components';

export type PriorityLevel = 'high' | 'medium' | 'low';

const high = css`
    background: #FCE2E5;
    border: 1px solid #E4566E;
    color: #D11136;
`;
const medium = css`
    background: #FCEEE2;
    border: 1px solid #E48956;
    color: #E85300;
`;
const low = css`
    background: #D5F6DE;
    border: 1px solid #71FF7D;
    color: #068F10;
`;

const handlePriority = (priority: PriorityLevel) => {
  switch (priority) {
    case 'high':
      return high;
    case 'medium':
      return medium;
    case 'low':
      return low;
    default:
      return medium;
  }
};

const Button = styled.button<{ priority: PriorityLevel }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  gap: 10px;
  margin: 0;
  width: fit-content;
  height: 20px;
  border-radius: 2px;
  font-weight: 600;
  font-size: 10px;
  line-height: 160%;
  letter-spacing: -0.01em;

  ${({ priority }) => handlePriority(priority)}
`;

export default Button;
