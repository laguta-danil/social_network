const addPost = 'ADD-POST';
const updateNewPostText = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 5,
                txt: state.updateText,
                likesCount: 0,
            };
            state.postData.push(newPost);
            state.updateText = '';
            return state;
        case updateNewPostText:
            state.updateText = action.newText;
            return state;
        default:
            return state;
    }
    // if (action.type === addPost) {
    //     let newPost = {
    //         id: 5,
    //         txt: state.updateText,
    //         likesCount: 0,
    //     };
    //     state.postData.push(newPost);
    //     state.updateText = '';
    // } else if (action.type === updateNewPostText) {
    //     state.updateText = action.newText;
    // }
    // return state;
}

export const addPostActionCreator = () => ({ type: addPost})
export const updateNewPostTextActionCreactor = (Text) => ({ type: updateNewPostText, newText: Text });

export default profileReducer;
