import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {

    let newPostElement = React.createRef();

    let AddPosts = () => {
        props.AddPosts();
    }
    let onPostChange = () => {
        let Text = newPostElement.current.value;
        props.updateText(Text);
    }

    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div className={s.wrapper}>
            <div className={s.banner}>
                <img className={s.imgb} src='https://moreleto.com.ua/media/cache/a0/4f/a04fe69c599dacc3ccabdd17e663e639.jpg'/>
            </div>
            <div className={s.textBlock}>
                <ul>
                    <li>
                        {props.profile.fullName}
                    </li>
                    <li>
                        {props.profile.lookingForAJob == true ? (<img className={s.statusJob}
                                                                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_XLd9aTa3mj4E-uOLi1WOmvluyL2ly1aHVw&usqp=CAU"/>) : (
                            <img className={s.statusJob}
                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZ1DEObXxBSUyXSKrxevVArpek5MhJ_85Sg&usqp=CAU"/>)}
                    </li>
                    <li>
                        {props.profile.aboutMe}
                    </li>
                    <li>
                        {props.profile.lookingForAJobDescription}
                    </li>
                </ul>
            </div>
            <div className={s.userAva}>
                <li><img src={props.profile.photos.large}/></li>
                <li><ProfileStatus  status={props.status} updateStatus={props.updateStatus}/></li>
            </div>
            <div className={s.myPosts}>
                <textarea className={s.textArea} onChange={onPostChange}  ref={newPostElement} value={props.state.profilePage.updateText}/>
            </div>
            <button onClick={AddPosts}> Add posts</button>
        </div>)
}


export default ProfileInfo;