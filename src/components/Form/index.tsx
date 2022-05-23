import React from 'react'
import Button from '../Button'
import style from './Form.module.scss'

class Form extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor='task'>
                        Tarefa
                    </label>
                    <input
                        name='task'
                        id='task'
                        placeholder='O que você quer estudar'
                        type="text"
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor='time'>
                        Tempo
                    </label>
                    <input
                        step="1"
                        name="time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        type="time"
                        required
                    />
                </div>
                <Button
                    label="Adicionar"
                />
            </form>
        )
    }
}

export default Form