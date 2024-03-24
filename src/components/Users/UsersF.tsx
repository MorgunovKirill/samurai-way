import {FC, useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";
import axios from "axios";
import UserPhoto from '../../assets/images/avatar-default.jpg'

export const UsersF: FC<UsersPropsType> = ({users, setUsers, follow}) => {
    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then((res) => {
            setUsers(res.data.items)
        })
    }, [])

    return <div className={styles.usersContainer}>
        {
            users.map((u) => {
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
