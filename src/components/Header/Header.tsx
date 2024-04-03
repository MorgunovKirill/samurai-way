import React, {FC} from "react";
import styles from "./Header.module.css"


type HeaderPropsType = {
    isAuth: boolean,
    login: null | string,
}

const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={styles.header}>
            <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
                 alt="logo"/>
            {isAuth ? <span>{login}</span> : <button type={'button'} className={styles.loginBlock}>Login</button>}
        </header>
    )
}

export default Header
