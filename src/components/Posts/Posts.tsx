import React from "react";
import {Post} from "../Post/Post";

export const Posts = () => {
    return (
        <>
            <div>
                my posts
                <div>
                    new Post
                </div>
            </div>
            <div>
                <Post message={'Hello world!'} />
                <Post message={'It\'s my first message!'}/>
            </div>
        </>
    )
}
