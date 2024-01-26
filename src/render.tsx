import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {RootStateType} from "./types";
import {addPost} from "./redux/state";

export const reRenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <App
            posts={state.profilePage.posts}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            friends={state.sidebar.friends}
            addPost={addPost}
        />,
        document.getElementById('root')
    );
}

