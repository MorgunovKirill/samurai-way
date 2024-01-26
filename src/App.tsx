import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {DialogType, FriendType, MessageType, PostType} from "./types";

type AppPropsType = {
    posts: PostType[]
    dialogs: DialogType[]
    messages: MessageType[]
    friends: FriendType[]
    addPost: (text: string) => void
}

const App = ({posts, dialogs, messages, friends, addPost}: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={friends} />
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogs={dialogs} messages={messages}/>}/>
                    <Route path={'/profile'} render={() => <Profile posts={posts} addPost={addPost}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
