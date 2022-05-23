import React from 'react';
import style from '../List.module.scss';
import { ListItemProps } from './type';

export default function ListItem({
    item
}: ListItemProps) {
    return (
        <li className={style.item}>
            <h3>{item.tarefa}</h3>
            <span>{item.tempo}</span>
        </li>
    )
}