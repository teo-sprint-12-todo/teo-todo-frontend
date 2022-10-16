import React from 'react';
import styled from 'styled-components';
import type { Goal } from './GoalList';

const Elem = styled.div `
  display:grid;
  grid-template-columns:1fr 3fr;
  height : 17vh;
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

function GoalEndElem(item:Goal) {
  const True = true;
  const False = false;
  const {startDate, endDate, name, complete, incomplete} = item;

  return (<Elem>
      <Graph>aaa</Graph>
      <ElemCotext>
        <GoalDate>{startDate}~{endDate}[종료]</GoalDate>
        <GoalTitle>{name}</GoalTitle>
        <IsCompletionBox>
            <IsCompletionElem complete={True}>완</IsCompletionElem>
            <IsCompletionContent complete={True}>{complete}</IsCompletionContent>
            <IsCompletionElem complete={False}>미완</IsCompletionElem>
            <IsCompletionContent complete={False}>{incomplete}</IsCompletionContent>
        </IsCompletionBox>
      </ElemCotext>
  </Elem>);
}

export default GoalEndElem;
