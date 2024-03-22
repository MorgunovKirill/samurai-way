import styles from "./Users.module.css";
import UserPhoto from "../../assets/images/avatar-default.jpg";
import axios from "axios";
import React from "react";


class Users extends React.Component {
    getUsers = () => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            this.props.setUsers(res.data.items)
        })
    }

    componentDidMount() {
        this.getUsers();
    }

    render() {
        return <div className={styles.usersContainer}>
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

export { Users }
