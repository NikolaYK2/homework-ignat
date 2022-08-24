import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css';
import {AccordionNavLink} from "./pages/components/accordion/AccordionNavLink";

function Header() {
    return (
        <div>
            <AccordionNavLink/>
        </div>

        // <div className={s.blockNavLink} >
        //         <NavLink to={PATH.PRE_JUNIOR} className={({isActive})=> isActive ? s.blockNavLink__active : s.blockNavLink__none}>pre-junior</NavLink>
        //         <NavLink to={PATH.JUNIOR} className={({isActive})=> isActive ? s.blockNavLink__active_y : s.blockNavLink__none}>junior</NavLink>
        //         <NavLink to={PATH.JUNIOR_PLUS} className={({isActive})=> isActive ? s.blockNavLink__active_gr : s.blockNavLink__none}>junior+</NavLink>
        //     <div className={s.blockNavLink__check} onClick={omClickHandler}><img src="https://images.hdqwalls.com/wallpapers/bthumb/the-witcher-3-12k-6i.jpg" alt=""/></div>
        // </div>
    )
}
export default Header
