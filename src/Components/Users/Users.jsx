import React from "react";
import styles from './User.module.css'
import photoDefault from '../../../src/images.png'
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let pagesCount = props.totalUserCount / props.pageSize;
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={(e) => {
                    props.onPageChanged(p)
                }}
                             className={props.currentPage === p && styles.selectedPage || styles.unselectedPage}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <span>
                        <div>
                            <NavLink to={'/content/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : photoDefault}
                                 className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id=> id === u.id)}
                                          onClick={() => {props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id=> id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </span>
            </div>)
        }
    </div>
}


export default Users;
