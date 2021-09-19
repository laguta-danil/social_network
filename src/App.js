import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import React from "react";
import ContentContainer from "./Components/Profile/contentContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/login";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={  () => <DialogsContainer/>}/>
                    <Route path='/content/:userId?' render={ () => <ContentContainer />}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/users' render={ () => <UsersContainer/>}/>
                    <Route path='/login' render={ () => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
