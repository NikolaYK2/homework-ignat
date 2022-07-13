import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType[],
    setFilter: (value: FilterType)=>void,//надо filter a не value
    deleteAffairCallback: (_id: number)=>void,
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    // const set = (value: FilterType) => {props.setFilter(value)} // need to fix
    const setAll = () => {props.setFilter("all")} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter("middle")}
    const setLow = () => {props.setFilter("low")}

    return (
        <div>

            {mappedAffairs}

            {/*<button onClick={()=>set('all')}>All</button>*/}
            {/*<button onClick={()=>set("high")}>High</button>*/}
            {/*<button onClick={()=>set("middle")}>Middle</button>*/}
            {/*<button onClick={()=>set("low")}>Low</button>*/}
            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs

