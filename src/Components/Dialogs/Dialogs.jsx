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


let DialogsData = [
    {id: 1, name:'Dima' },
    {id: 2, name:'Andrey' },
    {id: 3, name:'Maksym' },
    {id: 4, name:'Sveta' },
    {id: 5, name:'Tania' },
    {id: 6, name:'Serhei' }
]

let MessageData = [
    {id: 1, message: 'Hi, how old are you?'},
    {id: 2, message: 'Vasia, pilit brevno'},
    {id: 3, message: 'Trust im my words!'},
    {id: 4, message: 'Learning IT kamasutra?'},
    {id: 5, message: 'I will be programist'},
    {id: 6, message: 'Javascript '}
]

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                <DialogsItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogsItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogsItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogsItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogsItem name={DialogsData[4].name} id={DialogsData[4].id} />
                <DialogsItem name={DialogsData[5].name} id={DialogsData[5].id} />


            </div>
            <div className={classes.messeges}>
                <Messege message={MessageData[0].message} id={MessageData[0].id} />
                <Messege message={MessageData[1].message} id={MessageData[1].id} />
                <Messege message={MessageData[2].message} id={MessageData[2].id} />
                <Messege message={MessageData[3].message} id={MessageData[3].id} />
                <Messege message={MessageData[4].message} id={MessageData[4].id} />
                <Messege message={MessageData[5].message} id={MessageData[5].id} />
            </div>
            <div className={classes.pic}> PICTURES</div>
        </div>
    )
}

export default Dialogs