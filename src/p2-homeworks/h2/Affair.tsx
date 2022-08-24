import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType, // need to fix any
    deleteAffairCallback: (id: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {props.deleteAffairCallback(id)}// need to fix
//из разбора домашки
    const priorityClass = `${s.item} ${s[props.affair.priority]}`;

    return (
        <div className={s.block}>
            <span className={s.item}>{props.affair.name} </span>
            <span className={priorityClass}>[{props.affair.priority}]</span>
            <button className={s.item__delete} onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
