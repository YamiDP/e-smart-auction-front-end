import { useMemo, useEffect, useState } from "react";
import moment from 'moment'

export const CountDown = ({  propsTimeCount = { show: false }, }) => {
const endAt = moment(propsTimeCount.time, 'YYYY-MM-DD HH:mm:ss')
const [day, setDay] = useState(0);
const [hour, setHour] = useState(0);
const [minute, setMinute] = useState(0);
const [second, setSecond] = useState(0);
const curent = moment()
const clearAt = endAt.diff(curent, 'seconds')

const interval = setInterval(() => {
  const now = moment()
  setHour(endAt.diff(now, 'hours') % 24)
  setMinute(endAt.diff(now, 'minute') % 60)
  setDay(endAt.diff(now, 'days'))
  setSecond(endAt.diff(now, 'seconds') % 60)
}, 1000)
setTimeout(() => {
  clearInterval(interval)
}, clearAt)
 if(endAt > curent)
 {
  return (
    <div
    className="countdownv2_holder" style={{display: propsTimeCount.dis}}
  >
    
    <div className="countdownv2_inner_holder">
      <p className="no-margin ibid-countdown-pre-text">
        Time left:
      </p>
      <div
        className="countdownv2 clock is-countdown"
        id="countdown_636b347c17378"
      >
        <span className="countdown-row countdown-show4">
          <span className="countdown-section">
            <span className="countdown-amount">{ day }</span>
            <span className="countdown-period">Days</span>
          </span>
          <span className="countdown-section">
            <span className="countdown-amount">{ hour }</span>
            <span className="countdown-period">Hours</span>
          </span>
          <span className="countdown-section">
            <span className="countdown-amount">{ minute }</span>
            <span className="countdown-period">Minutes</span>
          </span>
          <span className="countdown-section">
            <span className="countdown-amount">{ second }</span>
            <span className="countdown-period">Seconds</span>
          </span>
        </span>
      </div>
    </div>
  </div>
) ;
 }
   
};
