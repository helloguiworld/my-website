import {
    Link,
} from "react-router-dom";

import './styles.css';

import nameLogo from '../../assets/name_logo.svg';

export default function Header() {
    return (
        <header>
            <img src={nameLogo} alt="Logo" className="name-logo"/>
            
            <nav>
                <Link to='/'>Início</Link>
                {/* <Link to='/about-me'>Sobre mim</Link> */}
                {/* <Link>Projetos</Link> */}
                {/* <Link>Contato</Link> */}
            </nav>
        </header>
    );
}