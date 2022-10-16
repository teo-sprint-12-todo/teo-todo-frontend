import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import ProgressBar from '../../../components/ProgressBar';

const Container = styled.div`
  height : fit-content;
  width:100%;
  border-bottom:1px solid #EBEBF0;
`;

const ContentContainer = styled.div`
  display:grid;
  grid-template-columns : 1fr 5fr;
  align-items:center;
  gap:1em;
  width:100%;
  margin:1em 0 2em 0;
`;

const Date = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #1C1C1E;
`;

const PracticeContainer = styled.div`
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

const PracticeText = styled.div`
  color: #007FC7;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  letter-spacing: -0.01em;
`;

const TextContainer = styled.div<{ isWriting:boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding:7% 5%;
  border-radius: 4px;

  background:${({ isWriting }) => (isWriting ? '#E8EAF9' : '#F6F6F8')}
`;

const TextAreaContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  width:100%;
`;

const TextArea = styled.textarea`
  width:100%;
  border:none;
  background: #E8EAF9;
  color: #3A3A3C;
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.272358px;
  outline:none;
  resize:none;
`;

const Text = styled.div`
  border:none;
  background: #F6F6F8;
  color: #717B7D;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  line-height: 13px;
  letter-spacing: 0.272358px;
`;

const Confrim = styled.div`
  width:20px;
  margin-top:4px;
  color:#FB4B00;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.2723584771156311px;
  text-align: left;

`;

const ContentHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-top : 0.8em;
`

interface RetrospectWriteProps {
  date:string;
  isWriting:boolean;
  setIsWriting:React.Dispatch<React.SetStateAction<boolean>>;
}

function RetrospectWrite({
  date,
  isWriting,
  setIsWriting,
}:RetrospectWriteProps) {
  const handleClick = () => {
    setIsWriting(false);
    // post request
  };

  return (
    <Container>
      <ContentHeader>
        <Date>
            {date}
        </Date>
        <PracticeContainer>
            <PracticeText>0개 실천</PracticeText>
            /0
          </PracticeContainer>
      </ContentHeader>
      <ContentContainer>
            <ProgressBar percentage={0} size={3.5} />
            <TextContainer isWriting={isWriting}>
            {isWriting
              ? (
                <TextAreaContainer>
                  <TextArea rows={4} />
                  <Confrim onClick={handleClick}>완료</Confrim>
                </TextAreaContainer>
              )
              : <Text onClick={() => setIsWriting(true)}>성과또는 개선할 점을 적어보세요. +</Text>}
          </TextContainer>
      </ContentContainer>
    </Container>
  );
}

export default RetrospectWrite;
