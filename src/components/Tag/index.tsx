import './styles.css'

type TagProps = {
    children: string,
    color?: string,
}

export default function Tag(props: TagProps) {
    return (
        <div
            className="tag"
            style={props.color ? { backgroundColor: `${props.color}1A` } : undefined}
        >
            <p style={props.color ? { color: props.color } : undefined}>
                {props.children}
            </p>
        </div>
    );
}