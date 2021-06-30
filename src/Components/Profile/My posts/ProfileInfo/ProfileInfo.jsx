import React from "react";
import './ProfileInfo.css'

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://m.iguides.ru/upload/iblock/637/6375946d9669a27030241e80ffa82b93.jpg'/>
            </div>
            <div className='totalp'>
                ava + decription
                <div className='totalp'>
                    My posts
                </div>
                <div >
                    <textarea> Ублюдок пиши тут</textarea>
                </div>
                <div>
                    <button> New posts</button>
                </div>
            </div>
        </div>)
}

export default ProfileInfo;