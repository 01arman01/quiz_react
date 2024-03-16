import React from 'react';
import logo from "../../logo.svg";
import s from './Header.module.css'

function Header(props) {
    return (
        <header className={s.appHeader}>
            <img src={logo} className={s.appLogo} alt="logo"/>
            <h1>the react quiz </h1>
        </header>
    );
}

export default Header;