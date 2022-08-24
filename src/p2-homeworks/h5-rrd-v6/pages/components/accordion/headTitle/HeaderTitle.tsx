import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../Pages";
import s from './HeaderTitle.module.css';

export const HeaderTitle = () => {
    return (
        <div className={s.blockNavLink}>
            <NavLink to={PATH.PRE_JUNIOR} className={({isActive}) => isActive ? s.blockNavLink__active : s.blockNavLink__none}>pre-junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={({isActive}) => isActive ? s.blockNavLink__active_y : s.blockNavLink__none}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} className={({isActive}) => isActive ? s.blockNavLink__active_gr : s.blockNavLink__none}>junior+</NavLink>
        </div>
    );
}
