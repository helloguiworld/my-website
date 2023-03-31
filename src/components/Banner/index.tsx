import { useState } from 'react';

import './styles.css';

type BannerProps = {
    children: JSX.Element | (JSX.Element | null)[],
    short?: boolean,
    className?: string,
    
    style?: React.CSSProperties,
    hoverStyle?: React.CSSProperties,
}

export default function Banner(props: BannerProps) {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div
            className={"banner" + (props.short ? " short" : "") + (props.className ? ` ${props.className}` : "")}
            style={isHovering ? { ...props.style, ...props.hoverStyle } : props.style}

            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {props.children}
        </div>
    );
}