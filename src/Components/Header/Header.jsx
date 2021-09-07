import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <img
                src='https://w7.pngwing.com/pngs/505/824/png-transparent-logo-drawing-lion-lion-illustration-vertebrate-flower-fictional-character.png'/>
            Header
            <span className={styles.loginPosition}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </span>
        </div>
    )
}
export default Header;
