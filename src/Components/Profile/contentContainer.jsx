import React from "react";
import {connect} from "react-redux";
import Content from "./Content";
import {
    AddPosts,
    setUserContent,
    updateText
} from "../../redux/profile-reducer";
import * as axios from "axios";
import {withRouter} from "react-router";


class ContentContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let WithUrlDataContainer =  withRouter(ContentContainer)

export default ContentContainer = connect(mapStateToProps, {
    updateText,
    AddPosts,
    setUserContent
})(WithUrlDataContainer)


