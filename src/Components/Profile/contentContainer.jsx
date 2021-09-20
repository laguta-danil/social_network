import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {
    AddPosts,
    updateText,
    getUserProfile, getStatus, updateStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";



class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 19398;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Content {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
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
        status: state.profilePage.status,
    }
}

export default compose(
    connect(mapStateToProps, {
        updateText,
        AddPosts, getUserProfile, getStatus, updateStatus,
    }),
    withAuthRedirect,
    withRouter,
)(ContentContainer)



