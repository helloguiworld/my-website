import { MouseEventHandler } from 'react';
import './styles.css'

export type ButtonProps = {
    children: string | JSX.Element,
    onClick?: MouseEventHandler,
    className?: string,
    style?: React.CSSProperties,
}

export default function Button(props: ButtonProps) {

    return (
        <button
            type='button'
            className={"button" + (props.className ? " " + props.className : "")}
            style={props.style}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}