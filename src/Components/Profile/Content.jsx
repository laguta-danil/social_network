import React from "react";
import classes from './Content.module.css'
import My_posts from "./My posts/My_posts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";

const Content = () => {
    return (
        <div className={classes.t}>
            <ProfileInfo/>
            <My_posts/>
        </div>
    )
}

export default Content;
