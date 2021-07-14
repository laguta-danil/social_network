import React from "react";
import classes from './My_posts.module.css'
import Posts from "./Posts/Posts";

let postData = [
    {id:0, txt:'First post', likes:153},
    {id:1, txt:'Sekond post', likes:1312},
    {id:2, txt:'Third post', likes:31},
]


let postsElements = postData.map( Post => <Posts txt={Post.txt} id={Post.id} likes={Post.likes}/>)



const My_posts = (props) => {
    return (
        <div className={classes.t} >
            {postsElements}

        </div>
    )
}

export default My_posts;
