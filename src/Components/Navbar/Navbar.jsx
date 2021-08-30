import React from "react";
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import Users from "../Settings/Users";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div><NavLink to="/content" className={classes.item} activeClassName={classes.active}> Profile </NavLink></div>
            <div><NavLink to="/dialogs" className={classes.item} activeClassName={classes.active}> Messegaes </NavLink></div>
            <div><NavLink to="/news" className={classes.item} activeClassName={classes.active}> News </NavLink></div>
            <div><NavLink to="/music" className={classes.item} activeClassName={classes.active}> Music </NavLink></div>
            <div><NavLink to="/users" className={classes.item} activeClassName={classes.active}> Users </NavLink></div>
        </div>
    )
}

export default Navbar;
