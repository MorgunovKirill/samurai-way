import React, {FC} from "react";
import styles from "./ProfileInfo.module.css";
import {ProfileType} from "../../types";


type ProfileInfoPropsType = {
    profile: ProfileType
}

export const ProfileInfo:FC<ProfileInfoPropsType> = ({profile}) => {
    return (
        <>
            <div className={styles.profileImg}>
                {profile.photos.large ?
                    <img src={profile.photos.large}/>
                    :
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
                }
            </div>
            <div className={styles.descriptionContainer}>
                {profile.photos.small ?
                    <img src={profile.photos.small}/>
                    :
                    <img src="https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg" alt="avatar"/>
                }
                <div>
                    <h2>{profile.fullName}</h2>
                    <p>
                       About me: {profile.aboutMe}
                    </p>
                    <p>
                        Looking for a job: {profile.lookingForAJob ? 'Yes' : 'No'}
                    </p>
                    <p className={styles.description}>
                        Description: {profile.lookingForAJobDescription}
                    </p>
                </div>
            </div>
        </>
    )
}
