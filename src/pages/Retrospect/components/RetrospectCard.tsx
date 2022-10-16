import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../../components/ProgressBar';
import { RetrospectCardProps } from '../../../types/dummy';

const Container = styled.div `
  height : fit-content;
  width:100%;
  border-bottom:1px solid #EBEBF0;
`;

const ContentHeader = styled.div `
  display:flex;
  justify-content:space-between;
  margin-top : 0.8em;
`

const ContentContainer = styled.div `
  display:grid;
  grid-template-columns : 1fr 5fr;
  align-items:center;
  gap:1em;
  width:100%;
  margin:1em 0 1em 0;
`;

const Date = styled.div `
  
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #1C1C1E;
`;

const PracticeContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 6px;
  gap: 4px;
  height: 16px;
  color:#8E8E93;
  background: #EBEBF0;
  border-radius: 16px;
  
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.01em;
  text-align: right;
`;

const PracticeText = styled.div `
  color: #007FC7;
  
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  letter-spacing: -0.01em;
`;

const TextContainer = styled.div `
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
  /* align-items: center; */
  /* width: 90%; */
  /* padding:7% 5%; */
  border-radius: 4px;
  background:#E8EAF9;
`;

const Text = styled.div `
  margin:16px;
  color:#3A3A3C;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2723584771156311px;
  text-align: left;
`;

function RetrospectCard(
    {date, percentage, todoCount, didCount, text} : RetrospectCardProps
) {
    return (
        <Container>
            <ContentHeader>
                <Date>
                    {date}
                </Date>
                <PracticeContainer>
                    <PracticeText>{`${didCount}개 실천`}</PracticeText>
                    {`/${todoCount}`}
                </PracticeContainer>
            </ContentHeader>
            <ContentContainer>
                <ProgressBar percentage={percentage} size={3.5}/>
                <TextContainer>
                    <Text>
                        {text}
                    </Text>
                </TextContainer>
            </ContentContainer>
        </Container>
    );
}

export default RetrospectCard;
