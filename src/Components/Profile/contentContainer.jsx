import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {addPostActionCreator, updateNewPostTextActionCreactor} from "../../redux/profile-reducer";


const mapStateToProps = (state) => {
    return {
        state : state,
        profilePage: state.profilePage,
        updateText: state.profilePage.updateText,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        updateText: (Text) => {
            let action = updateNewPostTextActionCreactor(Text) ;
            dispatch (action);
        },
        AddPosts: () => {
            dispatch(addPostActionCreator())
        }
    }
}

let ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content)

export default ContentContainer;