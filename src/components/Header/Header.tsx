import React, {FC} from "react";
import styles from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../redux/auth-reducer";


type HeaderPropsType = {
    isAuth: boolean,
    login: null | string,
}

const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    const dispatch = useDispatch()


    return (
        <header className={styles.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                 alt="logo"/>
            {isAuth ?
                <div>
                    <div>{login}</div>
                    <button
                        type='button'
                        onClick={() => {
                            dispatch(logoutTC())
                        }}
                    >Logout</button>
                </div>
                : <NavLink to={'login'} className={styles.loginBlock}>Login</NavLink>}
        </header>
    )
}

export default Header
