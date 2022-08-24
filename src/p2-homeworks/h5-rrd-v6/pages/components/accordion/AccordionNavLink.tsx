import React, {useState} from 'react'
import s from './AccordionNavLink.module.css';
import {HeaderTitle} from "./headTitle/HeaderTitle";

export function AccordionNavLink() {

    let [collapsed, setCollapsed] = useState<boolean>(false)


    const onClickHandler = () => {
        if (!collapsed) {
            setCollapsed(true);
        } else {
            setCollapsed(false)
        }
    }


    return (
        <div className={s.block}>
            {collapsed && <HeaderTitle/>}
            <div className={s.blockNavLink__check} onClick={onClickHandler}>
                <img src="https://images.hdqwalls.com/wallpapers/bthumb/the-witcher-3-12k-6i.jpg" alt=""/>
            </div>
        </div>
    )
}
