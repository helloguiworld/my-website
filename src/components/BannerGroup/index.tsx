import './styles.css';

type BannerGroup = {
    children: JSX.Element | JSX.Element[],
}

export default function BannerGroup(props: BannerGroup) {
    return (
        <div className='banner-group'>
            {props.children}
        </div>
    );
}