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

const Messege = (props) => {
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

let AddChat = () => {
    let text = newDialogElement.current.value;
    alert(text);
}


const Dialogs = (props) => {

    let dialogElements = props.Data.DialogsData.map(dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}
                                                                            ava={dialogs.ava}/>);

    let messageElements = props.Data.MessageData.map(m => <Messege message={m.message} id={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.mess}>
                {dialogElements}
            </div>
            <div className={classes.mess}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newDialogElement}/>
            </div>
            <button onClick={AddChat}> Send a message</button>
        </div>
    )
}
export default Dialogs;