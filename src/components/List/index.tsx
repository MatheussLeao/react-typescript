import React, { useState } from 'react';
import ListItem from './item';
import style from './List.module.scss';

function Lista() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: "Typescript",
        tempo: "03:00:00"
    }]);

    return (
        <aside className={style.listaTarefas}>
            <h2
                onClick={() => {
                    console.log("h2 clicado", tarefas)
                    setTarefas([...tarefas,
                    {
                        tarefa: "Estudar STATE",
                        tempo: "05:00:00"
                    }
                    ])
                }}> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <ListItem
                        key={index}
                        item={item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;