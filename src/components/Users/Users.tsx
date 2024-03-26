import styles from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar-default.jpg";
import React, {FC} from "react";
import {UserType} from "../../types";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number, followed: boolean) => void,
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              onPageChanged,
                                              follow
                                          }) => {

    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.usersContainer}>
        <div>
            {
                pages.map((p) => {
                    return <span
                        key={p}
                        className={
                            `${styles.pageItem} ${currentPage === p ? styles.selectedPage : ''}`
                        }
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >{p}</span>
                })
            }
        </div>
        {
            users.map((u) => {
                return <div className={styles.userContainer} key={u.id}>
                    <div className={styles.userActions}>
                        <NavLink to={`/profile/${u.id}`}>
                            <img
                                className={styles.userPhoto}
                                src={u.photos.small !== null ? u.photos.small : UserPhoto}
                                alt=""
                            />
                        </NavLink>
                        <div>
                            {
                                u.followed ? <button onClick={() => follow(u.id, false)} type='button'>
                                    Unfollow
                                </button> : <button onClick={() => follow(u.id, true)} type='button'>
                                    Follow
                                </button>
                            }
                        </div>
                    </div>
                    <div className={styles.userInfo}>
                        <div>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}
