import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';

const Container = styled.div<{ size:number }>`
  ${({ size }) => `width:${size}em; height:${size}em;`}
`;

const Text = styled.div<{color:string}>`
  position:relative;
  top:-9%;
  color:${(props)=>props.color};
  font-family: Pretendard-bold;
  font-size: 0.8em;
  font-weight: bolder;
  line-height: 13px;
  letter-spacing: -0.01em;
`;

interface ProgressBarProps {
  percentage:number;
  size:number;
  color?: Color;
}

type Color = 'skyblue' | 'red' | 'black';

function ProgressBar({ percentage, size, color }:ProgressBarProps) {
  const percent = percentage || 0;

  const convertColorCode = (value?:Color) => {
    if (typeof value === 'undefined') return '#00D2FA';

    switch (value) {
      case 'skyblue':
        return '#00D2FA';
      case 'red':
        return '#FA3C00';
      case 'black':
        return '#1C1C1E';
      default:
        return '#00D2FA';
    }
  };

  return (
    <Container size={size}>
      <CircularProgressbarWithChildren
        value={percent}
        styles={buildStyles({
          pathTransitionDuration: 0.5,
          pathColor: convertColorCode(color),
          trailColor: '#D8D8DC',
        })}
      >
        <Text color={convertColorCode(color)}>{`${percent}%`}</Text>
      </CircularProgressbarWithChildren>
    </Container>
  );
}

ProgressBar.defaultProps = {
  color: undefined,
};

export default ProgressBar;
