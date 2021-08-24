import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 0, txt: 'First post', likes: 153},
                {id: 1, txt: 'Sekond post', likes: 1312},
                {id: 2, txt: 'Third post', likes: 31},
            ],
            updateText: 'WHAT IS IT SHIT'
        },
            dialogsPage: {
                DialogsData: [
                    {id: 1, name: 'Dima', ava: 'https://a.d-cd.net/sAAAAgFICuA-960.jpg'},
                    {id: 2, name: 'Andrey', ava: 'https://a.d-cd.net/JIWtnlsJaAePf4IKpNSVlvmm0es-960.jpg'},
                    {id: 3, name: 'Maksym', ava: 'https://a.d-cd.net/aisWO5QJR1_qCfWSVxibSBZ16GY-960.jpg'},
                    {id: 4, name: 'Sveta', ava: 'https://a.d-cd.net/8kS-20So9bGbMhs2Lmr1QMQnPAU-960.jpg'},
                    {id: 5, name: 'Tania', ava: 'https://a.d-cd.net/5QAAAgLq9-A-960.jpg'},
                    {id: 6, name: 'Serhei', ava: 'https://a.d-cd.net/cQAAAgONi-A-960.jpg'}
                ],
                MessageData: [
                    {id: 1, message: 'Hi, how old are you?'},
                    {id: 2, message: 'Vasia, pilit brevno'},
                    {id: 3, message: 'Trust im my words!'},
                    {id: 4, message: 'Learning IT kamasutra?'},
                    {id: 5, message: 'I will be programist'},
                    {id: 6, message: 'Javascript '}
                ],
                newMessageBody: ''
            }

    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)

        // if (action.type === addPost) {
        //     let newPost = {
        //         id: 5,
        //         txt: this._state.profilePage.updateText,
        //         likesCount: 0,
        //     };
        //     this._state.profilePage.postData.push(newPost);
        //     this._state.profilePage.updateText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === updateNewPostText) {
        //     this._state.profilePage.updateText = action.newText;
        //     this._callSubscriber(this._state);
        //  if (action.type === updateMessageBody) {
        //     this._state.dialogsPage.newMessageBody = action.messageBody ;
        //     this._callSubscriber(this._state)
        // }else if (action.type === sendMessage) {
        //     let body = this._state.dialogsPage.newMessageBody;
        //     this._state.dialogsPage.newMessageBody = '';
        //     this._state.dialogsPage.MessageData.push({id: 6, message: body });
        //     this._callSubscriber(this._state)
        // }

    }
}

window.store = store;
export default store;