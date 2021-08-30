import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import React from "react";
import ContentContainer from "./Components/Profile/contentContainer";
import Users from "./Components/Settings/Users";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={  () => <DialogsContainer/>}/>
                    <Route path='/content' render={ () => <ContentContainer />}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/users' render={ () => <Users/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
