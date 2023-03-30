import './styles.css';

type BannerGroup = {
    children: JSX.Element | JSX.Element[],
    tabletSensitive?: boolean,
}

export default function BannerGroup(props: BannerGroup) {
    return (
        <div className={'banner-group' + (props.tabletSensitive ? ' tablet-sensitive' : '')}>
            {props.children}
        </div>
    );
}