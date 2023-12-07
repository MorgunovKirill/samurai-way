import React from "react";
import styles from "./Profile.module.css"

const Profile = () => {
   return (
       <div className={styles.content}>
           <div>
               <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"/>
           </div>
           <div>
               <img src="https://img.freepik.com/premium-vector/mans-head-avatar-vector_83738-354.jpg" alt="avatar"/>
               description
           </div>
           <div>
               my posts
               <div>
                   new Post
               </div>
           </div>
           <div>
               <div className={styles.item}>Post 1</div>
               <div className={styles.item}>Post 2</div>
           </div>
       </div>
   )
}

export default Profile
