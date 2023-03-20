import styled from "styled-components";
import SchedulerListCard from "./6_schedulerListCard";



// 논리 처리(날짜와 스케쥴리스트를 받아서 해당 날짜의 스케쥴
//들이 들어있는 ListCard를 return 해주는 함수)

const getListCards = (date,scheduleList,f,f2) =>{ // 어떻게 props로 안받았는데 이게 가능하지?
    //f <= onCompleteClick함수를 넘겨주고 있다
    const key = date.format('YYYYMMDD');
    

    //만약 '20230301'번째 방에 스케쥴이 없다면 undefined
    //만약 '20230301'번째 방이 스케쥴이 모두 삭제되었다면 비어있는 배열
    if(scheduleList[key] === undefined || scheduleList[key].length === 0){
        return <p>일정을 추가해 주세요</p>;
    }

    return scheduleList[key].map(
        (v)=> <SchedulerListCard 
                key={v.id} //v = 배열속 첫번째 스케쥴//v.id = id1 /id2./..... 
                completed={v.isComplete}
                title = {v.title}
                detail ={v.detail}
                sTime={v.sTime}
                eTime={v.eTime}
                onClick={()=>{f(v.id)}}
                onXClick={()=>{f2(v.id)}}
                />
               );
}


const SchedulerContent = (props) =>{
    const {date,scheduleList,scheduleCnt,completeCnt,setScheduleList} = props;

    const onCompleteClick = (id) =>{
        
        setScheduleList((scheduleList)=>{
            
            const key =date.format('YYYYMMDD')
            const tmp = JSON.stringify(scheduleList);
            const copy = JSON.parse(tmp);  //완전히 똑같은데 완전히 새로운 객체가 된다 이렇게하면 내용은 똑같은데 위치가 다 다르게 새롭게 만들어짐
    
    
            const updatedSchedule = copy[key].map((v)=>
                 v.id === id ? {...v,isComplete: !v.isComplete} : v
            );
    
            copy[key] =updatedSchedule;
            
            return copy;
        })


    }

    const onXClick = (id) =>{
        setScheduleList((scheduleList)=>{
             const cpy= JSON.parse(JSON.stringify(scheduleList));
             const key = date.format('YYYYMMDD')
             cpy[key]=cpy[key].filter((v)=>v.id !==id);
                
             return cpy
        
        });
    }

    const listCards = getListCards(date,scheduleList,onCompleteClick,onXClick);



    return(
    <SchedulerContentWrap>
        <SchedulerHeader>
            <h2>{date.format('YYYY년 MM월 DD일')}스케쥴 </h2>
            <p>총 {scheduleCnt}개 항목 중 {completeCnt}개 완료!</p>
            <button>+</button>
        </SchedulerHeader>
            {listCards}
    </SchedulerContentWrap>
    );
}

export default SchedulerContent;

const SchedulerContentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    overflow-y: scroll;
    padding : 0px 20px;
    row-gap: 20px;
    &::-webkit-scrollbar{
        display: none;
    }
    align-items: center;
`;

const SchedulerHeader = styled.div`
    border-bottom: 3px solid #e9e9e9;
    position : sticky; //relative 자동으로 적용
    z-index : 1;
    background-color: white;

    padding: 20px 0 10px;
    

    & button{
        position: absolute;
        right : 10px;
        bottom : 10px;
    }

    width : 100%;
    top : 0;


`;