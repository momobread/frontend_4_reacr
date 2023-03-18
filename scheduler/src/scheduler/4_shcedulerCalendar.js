import styled from "styled-components"
import { LocalizationProvider } from '@mui/x-date-pickers';
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers";

const SchedulerCalendar = (props) =>{

    const {date,setDate}=props;

    return (
        <SchedulerCalendarWrap>
            <h2>Canlendar를 클릭 후 일정 확인!</h2>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar value ={date} onChange={(newValue)=>{setDate(newValue)}}></DateCalendar>
            </LocalizationProvider>
            <p>{date.format('YYYY년 MM월 DD일')}은 총 9개의 일정이 존재합니다</p>
        </SchedulerCalendarWrap>
    )
}

export default SchedulerCalendar;

const SchedulerCalendarWrap = styled.div`
    
`