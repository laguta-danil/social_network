import React from "react";
import classes from './Posts.module.css'


const Posts = (props) => {
    return (
        <div className={classes.t}>
            <div>
                <img src='https://topmsg.ru/wp-content/uploads/muzhchina-v-shlyape-s-sigaretoj.jpg'/>
                { props.message }
                <div>
                    Likes {props.likes}
                </div>
            </div>


        </div>
    )
}

export default Posts;
