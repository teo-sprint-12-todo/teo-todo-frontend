import React, {useState} from 'react';
import styled from 'styled-components';

const NavBox = styled.div `
  width:100%;
  border-block:solid #BCBCC0 1px;
  padding: 0.5em 0;
  display:flex;
  justify-content:space-around;
`

const NavElem = styled.div <{isProgress:boolean}>`
  color : ${(props)=>(props.isProgress ? "#1C1C1E": "#8E8E93")} ;
  display:flex;
`

const ElemCntProgress = styled.div<{isProgress:boolean}> `
  color : ${(props)=>(props.isProgress ? "#D11136": "#F7B5BF")} ;
  padding-left:0.2em;
`

const ElemCntComplete = styled.div<{isProgress:boolean}> `
  color : ${(props)=>(props.isProgress ? "#224AC6": "#9EA9E9")} ;
  padding-left:0.2em;
`

interface Changed{
  changeList:(comp:boolean) => void
}

function GoalNav({changeList}:Changed) {
  const [progress, setProgress] = useState<boolean>(true)
  const [complete, setComplete] = useState<boolean>(!progress)

  const progressHandler = ()=>{
    setProgress(true);
    setComplete(false);
    changeList(true);
  }

  const completeHandler = ()=>{
    setProgress(false);
    setComplete(true);
    changeList(false);
  }

  return (
      <NavBox>
          <NavElem onClick={progressHandler} isProgress={progress}>진행중
              <ElemCntProgress isProgress={progress}>5</ElemCntProgress>건</NavElem>
          <NavElem onClick={completeHandler} isProgress={complete}>종료
              <ElemCntComplete isProgress={complete}>5</ElemCntComplete>건</NavElem>
      </NavBox>
  );
}

export default GoalNav;
