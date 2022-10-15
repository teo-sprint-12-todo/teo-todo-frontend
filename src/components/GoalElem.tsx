import React from 'react';
import styled from 'styled-components';

const Elem = styled.div `
  display:grid;
  grid-template-columns:1fr 3fr;
  height : 18vh;
  align-items:center;
  border-bottom : solid 1px #EBEBF0;
`

const Graph = styled.div `
  width:100%;
  height:100%;
  background-color:black;
`

const ElemCotext = styled.div`
  padding:1em;
`

const GoalDate = styled.div`
font-size : 0.8em;`

const GoalTitle = styled.div`
  font-size: 0.9 em;
  margin-block:0.3em;
  padding:0.2em 0.3em;
  width:fit-content;
  background-color:#E8EAF9;
  border-radius : 5px;
  font-weight:bolder;
`

const IsCompletionBox = styled.div`
  width:56%;
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  justify-items:center;
  align-items:center;
`

const IsCompletionElem = styled.div<{complete:boolean}>`
  background:black;
  color:white;
  width:10vw;
  text-align:center;
  padding:0.5em 0;
  border-radius:1em;
  font-size : 0.7em;
  background-color : ${(props)=> props.complete ? "#FA3C00" : "#8E8E93"}
`

const IsCompletionContent = styled.div<{complete:boolean}>`
  text-align:center;
  font-size : 0.8em;
  color : ${(props)=> props.complete ? "#FA3C00" : "#8E8E93"}
`

function GoalElem() {
  const True = true;
  const False = false;

  return (<Elem>
      <Graph>aaa</Graph>
      <ElemCotext>
        <GoalDate>2022.10.17~2022.12.30</GoalDate>
        <GoalTitle>목표이름</GoalTitle>
        <IsCompletionBox>
            <IsCompletionElem complete={True}>완</IsCompletionElem>
            <IsCompletionContent complete={True}>0</IsCompletionContent>
            <IsCompletionElem complete={False}>미완</IsCompletionElem>
            <IsCompletionContent complete={False}>0</IsCompletionContent>
        </IsCompletionBox>
      </ElemCotext>
  </Elem>);
}

export default GoalElem;
