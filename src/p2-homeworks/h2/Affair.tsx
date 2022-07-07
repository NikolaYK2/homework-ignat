import React from 'react'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType, // need to fix any
    deleteAffairCallback: (affDel: number)=>void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (affDel: number) => {props.deleteAffairCallback(affDel)}// need to fix

    return (
        <div>
            <span>{props.affair.name} </span>
            <span> {props.affair.priority}</span>
            <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair


// ==========================================================================
//
// import React from 'react'
//
// type AffairPropsType = {
//     // key не нужно типизировать
//     affair: any // need to fix any
//     deleteAffairCallback: any // need to fix any
// }
//
// function Affair(props: AffairPropsType) {
//     const deleteCallback = () => {}// need to fix
//
//     return (
//         <div>
//             // show some text
//             <button onClick={deleteCallback}>X</button>
//         </div>
//     )
// }
//
// export default Affair