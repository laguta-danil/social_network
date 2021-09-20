import {profileAPI, userAPI} from "../API/Api";

const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';
const SET_USER_CONTENT = 'SET_USER_CONTENT';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        {id: 0, txt: 'First post', likes: 153},
        {id: 1, txt: 'Sekond post', likes: 1312},
        {id: 2, txt: 'Third post', likes: 31},
    ],
    updateText: 'WHAT IS IT SHIT',
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case addPost: {
            let newPost = {
                id: 5,
                txt: state.updateText,
                likesCount: 235,
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                updateText: ''
            }
        }
        case updateNewPostText: {
            return {
                ...state,
                updateText: action.newText
            };
        }
        case SET_USER_CONTENT: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return{
                ...state,
                status: action.status,
            }
        }
        default:
            return state;
    }
}

export const AddPosts = () => ({type: addPost})
export const updateText = (Text) => ({type: updateNewPostText, newText: Text});
export const setUserContent = (profile) => ({type: SET_USER_CONTENT, profile});
export const setStatus = (status) => ({type: SET_STATUS, status})
//thunks//

export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUserContent(response.data))
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response=> {
        dispatch(setStatus(response.data))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    })
}

export default profileReducer;
