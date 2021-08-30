import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     let state = props.store.getState().dialogsPage
//
//
//     let AddChat = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateMessageCreator(body))
//     }
//
//
//     return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={AddChat} Data={props.state}
//                     dialogsPage={state}/>
//
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (body) => {
            dispatch(updateMessageCreator(body));
        },
        AddChat: () => {
            dispatch(sendMessageCreator())
        }

    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;