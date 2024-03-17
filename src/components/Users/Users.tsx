import {FC, useEffect} from "react";
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css";

export const Users: FC<UsersPropsType> = ({users, setUsers, follow}) => {
    useEffect(() => {
        setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Dimych',
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                followed: true,
                fullName: 'Ivan',
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                followed: true,
                photoUrl: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/44906d04-547a-45ef-a232-1b2e41d6b5df/220x330',
                fullName: 'Nikolai', status: 'GO GO GO', location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }, [])

    return <div className={styles.usersContainer}>
        {
            users.map((u) => {
                return <div className={styles.userContainer} key={u.id}>
                    <div className={styles.userActions}>
                        <div>
                            <img className={styles.userPhoto} src={u.photoUrl} alt="user photo"/>
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
                                {u.fullName}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </div>
                        <div>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </div>
                    </div>
                </div>
            })
        }
    </div>
}
