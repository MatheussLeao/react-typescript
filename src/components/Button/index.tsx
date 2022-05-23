import React from 'react'
import style from './Button.module.scss'
import { ButtonProps } from './types'

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <button
                className={style.botao}
                onClick={this.props?.onclick}
            >
                {this.props.label}
            </button>
        )
    }
};

export default Button