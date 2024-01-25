import React, {FC} from "react";
import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import {FriendType} from "../../redux/state";

type NavbarPropsType = {
    friends: FriendType[]
}

const Navbar: FC<NavbarPropsType> = ({friends}) => {
    return (
        <div className={styles.nav}>
            <nav >
                <div className={styles.item}>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/profile">Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/dialogs">Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/news">News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/music">Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink className={styles.link} activeClassName={styles.active} to="/settings">Settings</NavLink>
                </div>
            </nav>
            <div className={styles.friends}>
                <h2>Friends</h2>
                <ul>
                    {
                        friends.map(friend => <li className={styles.friend} key={friend.id}>
                            {friend.name}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar
