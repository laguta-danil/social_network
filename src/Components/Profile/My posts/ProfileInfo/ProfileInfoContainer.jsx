import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreactor} from "../../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";



const ProfileInfoContainer = (props) => {

    let AddPosts = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (Text) => {
        let action = updateNewPostTextActionCreactor(Text) ;
        props.store.dispatch (action);
    }


    return (<ProfileInfo AddPosts={AddPosts} updateText={onPostChange} store={props.store}/>)
}

export default ProfileInfoContainer;