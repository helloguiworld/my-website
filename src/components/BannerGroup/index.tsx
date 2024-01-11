import './styles.css';

type BannerGroupProps = {
    children: JSX.Element | JSX.Element[],
    tabletSensitive?: boolean,
}

export default function BannerGroup(props: BannerGroupProps) {
    return (
        <div className={'banner-group' + (props.tabletSensitive ? ' tablet-sensitive' : '')}>
            {props.children}
        </div>
    );
}