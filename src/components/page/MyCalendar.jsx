import React, { useState } from 'react'
import Calendar from 'react-calendar';


const MyCalendar = () => {
    const [value, onChange] = useState(new Date());
    const [event,setEvent]=useState();
    
const Modal=()=>{
        return(
            <div className="modal">
                <h2>제목</h2>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        )
    }
  return (
    <Calendar
    onChange={onChange}
    value={value}
    />
  )
}

export default MyCalendar
