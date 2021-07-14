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
        <div className={classes.messeges}>
            <NavLink to='/dialogs'> {props.message}</NavLink>
        </div>

    )
}


const Dialogs = (props) => {

    let DialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Maksym'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Tania'},
        {id: 6, name: 'Serhei'}
    ]


    let MessageData = [
        {id: 1, message: 'Hi, how old are you?'},
        {id: 2, message: 'Vasia, pilit brevno'},
        {id: 3, message: 'Trust im my words!'},
        {id: 4, message: 'Learning IT kamasutra?'},
        {id: 5, message: 'I will be programist'},
        {id: 6, message: 'Javascript '}
    ]

    let dialogElements = DialogsData.map(dialogs => <DialogsItem name={dialogs.name} id={dialogs.id}/>);

    let messageElements = MessageData.map(m => <Messege message={m.message} id={m.id}/>);

    return (
        <div className={classes.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div>
                {messageElements}
            </div>


            <div className={classes.pic}> PICTURES</div>
        </div>
    )
}

export default Dialogs