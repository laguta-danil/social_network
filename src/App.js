import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Profile/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Setting from "./Components/Settings/Settings";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route exact path='/dialogs' render={  () => <Dialogs Data={props.state.dialogsPage}/>}/>
                    <Route path='/content' render={ () => <Content Data={props.state.profilePage}
                                                                   AddPosts={props.AddPosts}/>}/>
                    <Route path='/news' render={ () => <News/>}/>
                    <Route path='/music' render={ () => <Music/>}/>
                    <Route path='/settings' render={ () => <Setting/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
