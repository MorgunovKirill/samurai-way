import styles from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar-default.jpg";
import axios from "axios";
import React from "react";


class Users extends React.Component {
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCount(res.data.totalCount)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
            this.props.setUsers(res.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
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
                                `${styles.pageItem} ${this.props.currentPage === p ? styles.selectedPage : ''}`
                            }
                            onClick={() => {
                                this.onPageChanged(p)
                            }}
                        >{p}</span>
                    })
                }
            </div>
            {
                this.props.users.map((u) => {
                    return <div className={styles.userContainer} key={u.id}>
                        <div className={styles.userActions}>
                            <div>
                                <img
                                    className={styles.userPhoto}
                                    src={u.photos.small !== null ? u.photos.small : UserPhoto}
                                    alt=""
                                />
                            </div>
                            <div>
                                {
                                    u.followed ? <button onClick={() => this.props.follow(u.id, false)} type='button'>
                                        Unfollow
                                    </button> : <button onClick={() => this.props.follow(u.id, true)} type='button'>
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
}

export {Users}
