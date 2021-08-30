import React from "react";
import classes from './Content.module.css'
import My_posts from "./My posts/My_posts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";


const Content = (props) => {
    return (
        <div className={classes.t}>
            <ProfileInfo state = {props.state} AddPosts={props.AddPosts} updateText={props.updateText}/>
            <My_posts profilePage={props.profilePage}/>
        </div>
    )
}

export default Content;