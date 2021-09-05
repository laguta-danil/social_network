import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {
    addPostActionCreator, AddPosts,
    setUserContent,
    updateNewPostTextActionCreactor,
    updateText
} from "../../redux/profile-reducer";
import * as axios from "axios";


class contentContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserContent(response.data)
            })
    }

    render() {
        return (
            <div>
                <Content {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
        profilePage: state.profilePage,
        updateText: state.profilePage.updateText,
        profile: state.profilePage.profile,
    }
}


let ContentContainer = connect(mapStateToProps, {
    updateText,
    AddPosts,
    setUserContent
})(contentContainer)

export default ContentContainer;