import {
    Link,
} from "react-router-dom";

import './styles.css';

import nameLogo from '../../assets/name_logo.png';

export default function Header() {
    return (
        <header>
            <img src={nameLogo} alt="Logo" className="name-logo"/>
            
            <nav>
                <Link>Início</Link>
                <Link>Sobre mim</Link>
                <Link>Projetos</Link>
                <Link>Contato</Link>
            </nav>
        </header>
    );
}