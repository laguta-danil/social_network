import React from "react";
import './UserModule.css'

let Users = (props) => {
    return <div>
        {
            props.usersNames.map(u => <div key={u.userId}>
                <span>
                    <div>
                        <img/>
                    </div>
                    <div>
                        <button> follow</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.firstName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;
