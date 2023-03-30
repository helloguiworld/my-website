import './styles.css';

type BannerProps = {
    children: JSX.Element | (JSX.Element | null)[],
    short?: boolean,
    className?: string,
    style?: React.CSSProperties,
}

export default function Banner(props: BannerProps) {
    return (
        <div
            className={"banner" + (props.short ? " short" : "") + (props.className ? ` ${props.className}` : "")}
            style={props.style}
        >
            {props.children}
        </div>
    );
}