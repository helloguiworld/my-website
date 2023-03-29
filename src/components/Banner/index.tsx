import './styles.css';

import Tag from '../Tag';

type BannerProps = {
    short?: boolean,
    style?: React.CSSProperties,
    title?: string,
    subtitle?: string,
    description?: string,
    tags?: string[],
}

export default function Banner(props: BannerProps) {
    return (
        <div
            className={"banner" + (props.short ? " short" : "")}
            style={props.style}
        >
            {props.title && <p className='banner-title'>{props.title}</p>}
            {props.subtitle && <p className='banner-subtitle'>{props.subtitle}</p>}
            {props.description && <p className='banner-description'>{props.description}</p>}
            {
                props.tags ?
                    <div className="tag-group">
                        {
                            props.tags.map((tag, index) =>
                                <Tag key={index} color={props.style?.color}>{tag}</Tag>
                            )
                        }
                    </div>
                    : null
            }
        </div>
    );
}