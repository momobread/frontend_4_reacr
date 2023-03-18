import styled from "styled-components";

const SchedulerContent = (props) =>{
    const {date} = props;
    <SchedulerContentWrap>
        <SchedulerHeader>
            <h2>{date.format('YYYY년 MM월 DD일')}스케쥴 </h2>
            <p>총 5개 항목 중 3개 완료!</p>
        </SchedulerHeader>
    </SchedulerContentWrap>

}

export default SchedulerContent;

const SchedulerContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    overflow-y: scroll;
    padding : 0px 20px;
    row-gap: 20px;
`;

const SchedulerHeader = styled.div`
    border-bottom: 3px solid #e9e9e9;

`;