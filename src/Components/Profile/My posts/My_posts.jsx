import React from "react";
import classes from './My_posts.module.css'
import Posts from "./Posts/Posts";

let postData = [
    {id:0, txt:'First post'},
    {id:1, txt:'Sekond post'},
    {id:2, txt:'Third post'},
]

let likesCounter = [
    {id:0, likes:153},
    {id:1, likes:1312},
    {id:2, likes:11}
]


const My_posts = (props) => {
    return (
        <div className={classes.t} >
            <Posts message={postData[0].txt} id={postData[0].id} likesCounter={likesCounter[0].likes}/>
            <Posts message={postData[1].txt} id={postData[1].id} likesCounter={likesCounter[1].likes}/>
            <Posts message={postData[2].txt} id={postData[2].id} likesCounter={likesCounter[2].likes}/>

        </div>
    )
}

export default My_posts;
