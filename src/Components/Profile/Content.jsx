import React from "react";
import classes from './Content.module.css'
import My_posts from "./My posts/My_posts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";
import {Redirect} from "react-router";


const Content = (props) => {
    if (!props.isAuth) return <Redirect to={"/login"} />
    return (
        <div className={classes.t}>
            <ProfileInfo state = {props.state} AddPosts={props.AddPosts}
                         updateText={props.updateText} profile={props.profile}
                         status={props.status} updateStatus={props.updateStatus}/>
            <My_posts profilePage={props.profilePage}/>
        </div>
    )
}

export default Content;