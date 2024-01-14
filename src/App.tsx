import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export type PostsDataType = {
    id: string
    text: string
    likesCount: number
}

const App = () => {
    const posts: PostsDataType[] = [
        {id: '1', text: 'Hello world!', likesCount: 3},
        {id: '2', text: 'It\'s my first message!', likesCount: 15},
    ]

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} render={() => <Profile posts={posts}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
