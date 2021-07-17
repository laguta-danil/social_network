import React from "react";
import classes from './My_posts.module.css'
import Posts from "./Posts/Posts";




const My_posts = (props) => {

    let postsElements = props.postData.map( Post => <Posts txt={Post.txt} id={Post.id} likes={Post.likes}/>)

    return (
        <div className={classes.t} >
            {postsElements}

        </div>
    )
}

export default My_posts;
