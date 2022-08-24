import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css';

type AffairsPropsType = { // need to fix any
    data: AffairType[],
    setFilter: (value: FilterType)=>void,//надо filter a не value
    deleteAffairCallback: (_id: number)=>void,
    filter:FilterType,
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    const set = (value: FilterType) => {props.setFilter(value)} // need to fix
    // const setAll = () => {props.setFilter("all")} // need to fix
    // const setHigh = () => {props.setFilter('high')}
    // const setMiddle = () => {props.setFilter("middle")}
    // const setLow = () => {props.setFilter("low")}
    const allActive = props.filter === 'all' ? s.active : s.stopActive;
    const highActive = props.filter === 'high' ? s.active : s.stopActive;
    const middleActive = props.filter === 'middle' ? s.active : s.stopActive;
    const lowActive = props.filter === 'low' ? s.active : s.stopActive;
    return(
        <div className={s.buttonFilter}>
            <div className={s.buttonFilter__item}>
                {mappedAffairs}
            </div>
            {/*<button onClick={()=>set('all')}>All</button>*/}
            {/*<button onClick={()=>set("high")}>High</button>*/}
            {/*<button onClick={()=>set("middle")}>Middle</button>*/}
            {/*<button onClick={()=>set("low")}>Low</button>*/}
            <button onClick={()=>set('all')} className={allActive}>All</button>
            <button onClick={()=>set('high')} className={highActive}>High</button>
            <button onClick={()=>set('middle')} className={middleActive}>Middle</button>
            <button onClick={()=>set('low')} className={lowActive}>Low</button>
        </div>
    )
}

export default Affairs

