import React from "react";
import classes from './Content.module.css'
import My_posts from "./My posts/My_posts";
import ProfileInfoContainer from "./My posts/ProfileInfo/ProfileInfoContainer";


const Content = (props) => {
    return (
        <div className={classes.t}>
            <ProfileInfoContainer store={props.store}/>
            <My_posts postData = {props.Data.postData} />
        </div>
    )
}

export default Content;