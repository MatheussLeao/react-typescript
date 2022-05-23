import React from 'react';
import style from './Clock.module.scss';

export default function Clock() {
    return (
        <>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
            <span>:</span>
            <span>0</span>
            <span>0</span>
        </>
    )
}