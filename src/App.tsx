import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                <Route path={'/profile/:userId?'} render={() => <ProfileContainer />}/>
                <Route path={'/users'} render={() => <UsersContainer />}/>
                <Route path={'/login'} render={() => <LoginContainer />}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
