import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/State";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPosts, updatePostText} from "./redux/State";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} AddPosts={AddPosts} updatePostText={updatePostText}/>
        </BrowserRouter>,
        document.getElementById('root'));
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
