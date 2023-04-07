import './App.css';
import {useState} from 'react';
import moment from 'moment';

const App =()=>{
  const [getMoment, setMoment]=useState(moment());     
  const today = getMoment;    // today == moment()   
  const firstWeek = today.clone().startOf('month').week();
  /* lastWeek에서 쓰인 조건문을 보면 1년은 52주가 존재하고 며칠이 더 있는데 이 부분을 달력은
  53주로써 표현해야 합니다!! 하지만 moment()는 내년의 첫 주인 1로 표시하기 때문에 
  마지막 주가 1이라면 53으로 표시합니다. */
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  const arr = [1, 2, 3, 4, 5];
  const calendarArr=()=>{
    let result = [];
    let week = firstWeek;
    for ( week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
           {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');

                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td key={index} style={{backgroundColor:'#F6F7C1'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} style={{backgroundColor:'#D8D8D8'}} >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index}  >
                        <span>{days.format('D')}</span>
                      </td>
                  );
                }
              })
            }
        </tr>);
    }
    return result;
  }

  return(
    <div className="App">

        <div className="control">
        <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
          <span>{today.format('YYYY 년 MM 월')}</span>
          <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
        </div>
        <table>
          <tbody>
          {calendarArr()}

          </tbody>
        </table>
    </div>
  
  )
}
export default App;
