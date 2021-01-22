import React from 'react';
import LinkWrapper from './LinkWrapper';

const Header = () =>{
    return (
        <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <a href="/" className="brand-logo ml-3">Casa do Código</a>
                    <ul id="nav-mobile" className="right">
                        <li><LinkWrapper to='/Autores'>Autores</LinkWrapper></li>
                        <li><LinkWrapper to='/Livros'>Livros</LinkWrapper></li>
                        <li><LinkWrapper to='/Sobre'>Sobre</LinkWrapper></li>
                    </ul>
                </div>
            </nav>
    );
}
export default Header;
