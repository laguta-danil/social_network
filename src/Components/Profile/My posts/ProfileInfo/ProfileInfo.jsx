import React from "react";
import './ProfileInfo.css'


const ProfileInfo = (props) => {

    let newPostElement = React.createRef();

    let AddPosts = () => {
        props.AddPosts();
    }
    let onPostChange = () => {
        let Text = newPostElement.current.value;
        props.updateText(Text);
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
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.state.profilePage.updateText}/>
                </div>
                <button onClick={AddPosts}> Add posts</button>
            </div>
        </div>)
}



export default ProfileInfo;