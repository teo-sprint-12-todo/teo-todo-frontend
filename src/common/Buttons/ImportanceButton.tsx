import styled, { css } from 'styled-components';

export type PriorityLevel = 'high' | 'medium' | 'low';

const high = css`
  background: #fce2e5;
  border: 1px solid #e4566e;
  color: #d11136;
`;
const medium = css`
  background: #fceee2;
  border: 1px solid #e48956;
  color: #e85300;
`;
const low = css`
  background: #d5f6de;
  border: 1px solid #71ff7d;
  color: #068f10;
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
