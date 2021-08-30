import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsers, unfollowAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        usersNames: state.usersPage.usersNames
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (userId) => {
            dispatch(setUsers(Users))
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Users);