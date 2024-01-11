import './styles.css';

type PageMainAreaProps = {
    children: JSX.Element | JSX.Element[],
    id: string,
}

export default function PageMainArea(props: PageMainAreaProps) {
    return (
        <main className='page-main-area' id={props.id}>
            {props.children}
        </main>
    )
}