// import React from "react";
// import {addPostActionCreator, updateNewPostTextActionCreactor} from "../../../../redux/profile-reducer";
// import ProfileInfo from "./ProfileInfo";
// import {connect} from "react-redux";
//
//
// //
// // const ProfileInfoContainer = (props) => {
// //
// //     let AddPosts = () => {
// //         props.store.dispatch(addPostActionCreator());
// //     }
// //     let onPostChange = (Text) => {
// //         let action = updateNewPostTextActionCreactor(Text) ;
// //         props.store.dispatch (action);
// //     }
// //
// //
// //     return (<ProfileInfo AddPosts={AddPosts} updateText={onPostChange} store={props.store.updateText}/>)
// // }
//
// let mapStateToProps = (state) => {
//     return{
//         updateText: state.profilePage.updateText
//     }
// }
// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateText: (Text) => {
//             let action = updateNewPostTextActionCreactor(Text) ;
//             dispatch (action);
//         },
//         AddPosts: () => {
//             dispatch(addPostActionCreator())
//         }
//
//     }
// }
//
// let ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
//
// export default ProfileInfoContainer;