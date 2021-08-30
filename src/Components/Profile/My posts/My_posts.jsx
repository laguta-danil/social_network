import React from "react";
import classes from './My_posts.module.css'
import Posts from "./Posts/Posts";


const My_posts = (props) => {
    let postsElements = props.profilePage.postData.map(Post => <Posts txt={Post.txt} id={Post.id} key={Post.id} likes={Post.likes}
                                                                      AddPosts={props.AddPosts}/>)

    return (
        <div className={classes.t}>
            {postsElements}

        </div>
    )
    
}

export default My_posts;
