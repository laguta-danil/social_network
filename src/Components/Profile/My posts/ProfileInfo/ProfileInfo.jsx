import React from "react";
import './ProfileInfo.css'
import {addPostActionCreator, updateNewPostTextActionCreactor} from "../../../../redux/State";



const ProfileInfo = (props) => {


    let newPostElement = React.createRef();

    let AddPosts = () => {
        props.dispatch(addPostActionCreator());
    }
    let onPostChange = () => {
        let Text = newPostElement.current.value;
        let action = updateNewPostTextActionCreactor(Text) ;
        props.dispatch (action);
    }


    return (
        <div>
            <div>
                <img src='https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg'/>
            </div>
            <div className='totalp'>
                ava + decription
                <div className='totalp'>
                    My posts
                </div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.Data.updateText}/>
                </div>
                <button onClick={AddPosts}> Add posts</button>
            </div>
        </div>)
}

export default ProfileInfo;