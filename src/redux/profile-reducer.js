const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 0, txt: 'First post', likes: 153},
        {id: 1, txt: 'Sekond post', likes: 1312},
        {id: 2, txt: 'Third post', likes: 31},
    ],
    updateText: 'WHAT IS IT SHIT'
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: addPost})
export const updateNewPostTextActionCreactor = (Text) => ({type: updateNewPostText, newText: Text});

export default profileReducer;
