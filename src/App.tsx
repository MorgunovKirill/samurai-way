import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./types";

type AppPropsType = {
    store: StoreType
}

const App = ({store}: AppPropsType) => {
    const state = store.getState();

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar friends={state.sidebar.friends}/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs dialogsPage={state.dialogsPage}/>}/>
                    <Route path={'/profile'} render={() => <Profile profilePage={state.profilePage}
                                                                    addPost={store.addPost.bind(store)}
                                                                    updateNewPostText={store.updateNewPostText.bind(store)}/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
