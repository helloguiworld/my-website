import { MouseEventHandler } from 'react';
import './styles.css';

import Button, { ButtonProps } from '../../../Button';

type BannerButtonProps = {
    children: ButtonProps['children'],
    className?: string,
    style?: React.CSSProperties,
    onClick?: MouseEventHandler,
}

export default function BannerButton(props: BannerButtonProps) {
    return (
        <Button
            className={'banner-button' + (props.className ? ' ' + props.className : '')}
            style={{
                ...(typeof props.children == 'string' ? { padding: '10px 15px' } : undefined),
                ...props.style
            }}
            onClick={props.onClick ? props.onClick : undefined}
        >
            {props.children}
        </Button>
    );
}