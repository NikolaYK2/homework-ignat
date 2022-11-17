import React, {useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Clock.module.css';

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        // clearInterval(timerId);
        window.clearTimeout(timerId);
        setTimerId(0)
    }
    const start = () => {
        stop()
        // const id: number = window.setInterval(() => {
        //     // setDate
        //     setDate(new Date())
        // }, 1000)
        let id: number = window.setTimeout(function tick()  {
            // setDate
            setDate(new Date());
            id = +setTimeout(tick,1000);
            setTimerId(id)
        }, 1000);
    }

    const onMouseEnter = () => {
        setShow(true)
        // show
    }
    const onMouseLeave = () => {
        setShow(false)
        // close
    }

    // const stringTime = 'Time' // fix with date
    const stringTime = date.toLocaleTimeString('ru-Ru') // fix with date
    const stringDate = date.toLocaleDateString('ru-Ru') // fix with date
    // const stringDate = 'Date' // fix with date

    return (
        <div>
            <div className={s.time}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>
            <div className={s.date}>
            {show && stringDate}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
