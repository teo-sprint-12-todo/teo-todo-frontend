import React, { useState } from 'react';
import styled from 'styled-components';
import type { Goal } from './GoalList';
import ProgressBar from './ProgressBar';

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
  display:flex;
  justify-content:center;
  align-items:center;
`

const ElemCotext = styled.div`
  padding:1em;
`

const GoalDate = styled.div`
font-size : 0.8em;`

const GoalTitle = styled.div`
  font-size: 0.9 em;
  margin-block:0.5em;
  padding:0.2em 0.3em;
  width:fit-content;
  background-color:#E8EAF9;
  border-radius : 5px;
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

const IsCompleteElem = styled.div<{complete:boolean}>`
  background:black;
  color:white;
  width:10vw;
  text-align:center;
  padding:0.5em 0;
  border-radius:1em;
  font-size : 0.7em;
  background-color : ${(props)=> props.complete ? "#1C1C1E" : "#8E8E93"}
`

const IsCompletionContent = styled.div<{complete:boolean}>`
  text-align:center;
  font-size : 0.8em;
  color : ${(props)=> props.complete ? "#FA3C00" : "#8E8E93"}
`

function GoalElem(item:Goal) {
  const True = true;
  const False = false;
  const {startDate, endDate, name, complete, incomplete, isCom} = item;
  const percent = Math.floor((complete/(complete+incomplete))*100)

  return (<Elem>
      <Graph>
        <ProgressBar percentage={percent} size={3.5}/>
      </Graph>
      <ElemCotext>
        <GoalDate>{startDate}~{endDate}{isCom?"[종료]":null}</GoalDate>
        <GoalTitle>{name}</GoalTitle>
        <IsCompletionBox>
            {isCom?<IsCompleteElem complete={True}>완</IsCompleteElem>:<IsCompletionElem complete={True}>완</IsCompletionElem>}
            <IsCompletionContent complete={True}>{complete}</IsCompletionContent>
            <IsCompletionElem complete={False}>미완</IsCompletionElem>
            <IsCompletionContent complete={False}>{incomplete}</IsCompletionContent>
        </IsCompletionBox>
      </ElemCotext>
  </Elem>);
}

export default GoalElem;
