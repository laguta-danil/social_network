import React from "react";
import classes from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    return (
        <div className={classes.dialogs}>
            <NavLink to={'/dialogs' + props.id}>{props.name}</NavLink>
        </div>
    )

}
const Message = (props) => {
    return (
        <div className={classes.messages}>
            <NavLink to='/dialogs'> {props.message}</NavLink>
        </div>

    )
}
const Ava = (props) => {
    return (
        <div className={classes.img}>
            <NavLink to='/dialogs'> {props.ava}</NavLink>
        </div>

    )
}

let newDialogElement = React.createRef();

const Dialogs = (props) => {
    // let Data = props.store.getState().dialogsPage
    let dialogElements = props.dialogsPage.DialogsData.map(dialogs => <DialogsItem name={dialogs.name} key={dialogs.id} id={dialogs.id}
                                                                            ava={dialogs.ava}/>);
    let messageElements = props.dialogsPage.MessageData.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
    let NewMessageBody = props.dialogsPage.newMessageBody;

    let AddChat = () => {
        props.AddChat();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.mess}>
                {dialogElements}
            </div>
            <div className={classes.mess}>
                {messageElements}
            </div>
            <div className={classes.text}>
                <textarea ref={newDialogElement} value={NewMessageBody} onChange={onNewMessageChange} cols="100" rows="25"
    placeholder="Enter your message!"/>
            </div>
            <button onClick={AddChat}> Send a message</button>
        </div>
    )
}


export default Dialogs;