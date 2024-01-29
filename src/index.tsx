import {addPost, state, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import {RootStateType} from "./types";

const reRenderEntireTree = (state : RootStateType) => {
    ReactDOM.render(
        <App
            state={state}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
        />,
        document.getElementById('root')
    );
}

reRenderEntireTree(state)

subscribe(reRenderEntireTree)
