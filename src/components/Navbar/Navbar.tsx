import React from "react";
import styles from "./Navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <a className={styles.link} href="/profile">Profile</a>
            </div>
            <div className={styles.item}>
                <a className={styles.link} href="/messages">Messages</a>
            </div>
            <div className={styles.item}>
                <a className={styles.link} href="/news">News</a>
            </div>
            <div className={styles.item}>
                <a className={styles.link} href="/music">Music</a>
            </div>
            <div className={styles.item}>
                <a className={styles.link} href="/settings">Settings</a>
            </div>
        </nav>
    )
}

export default Navbar
