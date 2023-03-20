import dayjs from 'dayjs';
import { useState } from 'react';
import styled from 'styled-components';
import SchedulerHeader from './2_schedulerHeader';
import SchedulerTemplate from './3_shcedulerTemplate';
import SchedulerCalendar from './4_shcedulerCalendar';
import SchedulerContent from './5_schedulerContent';


const initialData= {
    '20230301':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      },
      {
        id:2, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:false,
        sTime:'10:00',
        eTime:'11:00', 
      },
    ],
    '20230302':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      },
    ],
    '20230303':[
      {
        id:1, 
        title:'장보기', 
        detail:'저녁거리를 사러 가야함', 
        isComplete:true,
        sTime:'10:00',
        eTime:'11:00', 
      },
    ],
  };

//schedule의 총 갯수를 구하는 함수(매개변수로 scheduleList와 내가 보고싶은 날짜를 받아와서)
//함수 사용 결과는 schedule 갯수 return

const getScheduleCnt = (date,scheduleList)=>{
  const key = date.format('YYYYMMDD');
    if(scheduleList[key] === undefined)
    return 0;

    return scheduleList[key].length;
};

const getCompleteCnt = (date,scheduleList)=>{

  const key = date.format('YYYYMMDD');

  if(scheduleList[key]===undefined){ 
       return 0}

    return scheduleList[key].filter((v)=>v.isComplete).length  
       
    };

//완료된 schedule 갯수를 구하는 함수(매개변수로 scheduleList와 내가 보고싶은 날짜를 받아와서)
//함수 사용 결과는 schedule 갯수 return








const MainPage= ()=>{

    const [date,setDate] = useState(dayjs());
    const [scheduleList,setScheduleList]= useState(initialData);
    console.log(date);
    
    const scheduleCnt = getScheduleCnt(date,scheduleList);
    const completeCnt = getCompleteCnt(date,scheduleList);

    return(
        <MainWrap>
            <SchedulerHeader/>
            <SchedulerTemplate>
                <SchedulerCalendar scheduleCnt={scheduleCnt} date={date} setDate={setDate}></SchedulerCalendar>
                <SchedulerContent  
                scheduleCnt={scheduleCnt} completeCnt={completeCnt} 
                date={date} scheduleList={scheduleList}
                setScheduleList={setScheduleList}/>
            </SchedulerTemplate>
        </MainWrap>
    );
}

export default MainPage;

const MainWrap = styled.div`
    width: 100%;
    max-width: 1500px;

    margin: 0 auto;
`;