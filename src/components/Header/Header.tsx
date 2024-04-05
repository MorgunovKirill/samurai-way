import React, {FC} from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";


type HeaderPropsType = {
    isAuth: boolean,
    login: null | string,
}

const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    console.log('isAuth', isAuth);
    return (
        <header className={styles.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                 alt="logo"/>
            {isAuth ? <span>{login}</span> : <NavLink to={'login'} className={styles.loginBlock}>Login</NavLink>}
        </header>
    )
}

export default Header
