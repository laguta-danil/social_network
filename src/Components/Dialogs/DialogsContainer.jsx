import React from "react";
import {sendMessageCreator, updateMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage


    let AddChat = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateMessageCreator(body))
    }


    return <Dialogs updateMessageBody={onNewMessageChange} sendMessage={AddChat} Data={props.state}
                    dialogsPage={state}/>

}
export default DialogsContainer;