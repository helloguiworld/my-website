import './styles.css';

import Button, { ButtonProps } from '../../../Button';

type BannerButtonProps = {
    children: ButtonProps['children'],
    className?: string,
    style?: React.CSSProperties,
}

export default function BannerButton(props: BannerButtonProps) {
    return (
        <Button
            className={'banner-button' + (props.className ? ' ' + props.className : '')}
            style={typeof props.children == 'string' ? { padding: '10px 15px' } : undefined}
        >
            {props.children}
        </Button>
    );
}