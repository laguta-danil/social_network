import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {
    AddPosts,
    updateText,
    getUserProfile
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";


class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
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
        isAuth: state.auth.isAuth
    }
}

let WithUrlDataContainer =  withRouter(ContentContainer)

export default ContentContainer = connect(mapStateToProps, {
    updateText,
    AddPosts, getUserProfile
})(WithUrlDataContainer)


