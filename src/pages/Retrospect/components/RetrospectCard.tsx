import React from 'react';
import styled from 'styled-components';
import ProgressBar from '../../../components/ProgressBar';

const Container = styled.div`
  margin-top:17px;
  padding-bottom:30px;
  border-bottom:1px solid #EBEBF0;
`;

const ContentContainer = styled.div`
  display:flex;
`;

const AchieveContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
`;

const Date = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #1C1C1E;
`;

const Achieve = styled.div`
  width:42px;
  height:42px;
  margin-top:17px;
`;

const RecordContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  width:100%;
  margin-left:16.5px;
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
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: -0.01em;
  text-align: right;
`;

const PracticeText = styled.div`
  color: #007FC7;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: right;
  letter-spacing: -0.01em;
`;

const TextContainer = styled.div<{ haveText: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top:14px;
  gap: 6px;
  border-radius: 4px;

  background:${({ haveText }) => (haveText ? '#E8EAF9' : '#F6F6F8')}
`;

const TextArea = styled.textarea`
  border:none;
  background: #F6F6F8;
  color: #717B7D;
  font-family: 'Pretendard';
  font-style: normal;
  margin:16px;
  min-width:160px;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.272358px;
  outline:none;
  resize:none;
`;

const Text = styled.div`
  margin:16px;
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.2723584771156311px;
  text-align: left;
`;

interface RetrospectCardProps {
  date:string;
  percentage?:number;
  todoCount?:number;
  didCount?:number;
  text?: string;
}

function RetrospectCard({
  date, percentage, todoCount, didCount, text,
}:RetrospectCardProps) {
  return (
    <Container>
      <ContentContainer>
        <AchieveContainer>
          <Date>
            {date}
          </Date>
          <Achieve>
            <ProgressBar percentage={percentage || 0} size={44} />
          </Achieve>
        </AchieveContainer>

        <RecordContainer>
          <PracticeContainer>
            <PracticeText>{`${didCount || 0}개 실천`}</PracticeText>
            {`/${todoCount || 0}`}
          </PracticeContainer>
          <TextContainer haveText={!!text}>
            {text
              ? (
                <Text>
                  {text}
                </Text>
              )
              : <TextArea placeholder="성과 또는 개선할 점을 적어보세요." />}
          </TextContainer>
        </RecordContainer>
      </ContentContainer>
    </Container>
  );
}

RetrospectCard.defaultProps = {
  text: undefined,
  percentage: 0,
  todoCount: 0,
  didCount: 0,
};

export default RetrospectCard;