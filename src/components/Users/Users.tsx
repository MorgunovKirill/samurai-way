import styles from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar-default.jpg";
import React, {FC} from "react";
import {UserType} from "../../types";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void
    follow: (userId: number, followed: boolean) => void,
    toggleFollowingProgress: (id: number, isFetching: boolean) => void,
    followingInProgress: number[]
}

export const Users: FC<UsersPropsType> = ({
                                              users,
                                              totalUsersCount,
                                              pageSize,
                                              currentPage,
                                              onPageChanged,
                                              follow,
                                              followingInProgress,
                                              toggleFollowingProgress
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
                                u.followed ? <button
                                        onClick={() => {
                                            toggleFollowingProgress(u.id, true)
                                            usersAPI.unFollowUser(u.id).then((data) => {
                                                if (data.resultCode === 0) {
                                                    follow(u.id, false)
                                                }
                                                toggleFollowingProgress(u.id, false)
                                            })
                                        }
                                        }
                                        disabled={followingInProgress.some((el)=> el === u.id)}
                                        type='button'>
                                        Unfollow
                                    </button>
                                    : <button
                                        onClick={() => {
                                            toggleFollowingProgress(u.id, true)
                                            usersAPI.followUser(u.id).then((data) => {
                                                if (data.resultCode === 0) {
                                                    follow(u.id, true)
                                                }
                                                toggleFollowingProgress(u.id, false)
                                            })
                                            }
                                        }
                                        disabled={followingInProgress.some((el)=> el === u.id)}
                                        type='button'>
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
