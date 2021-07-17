import React from "react";
import classes from './Content.module.css'
import My_posts from "./My posts/My_posts";
import ProfileInfo from "./My posts/ProfileInfo/ProfileInfo";


const Content = (props) => {
    return (
        <div className={classes.t}>
            <ProfileInfo/>
            <My_posts postData = {props.Data.postData} />
        </div>
    )
}

export default Content;