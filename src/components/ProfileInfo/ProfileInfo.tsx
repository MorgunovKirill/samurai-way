import React from "react";
import styles from "./ProfileInfo.module.css";

export const ProfileInfo = () => {
    return (
        <>
            <div className={styles.profileImg}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
            </div>
            <div className={styles.descriptionContainer}>
                <img src="https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg" alt="avatar"/>
                <p className={styles.description}>
                    description
                </p>
            </div>
        </>
    )
}
