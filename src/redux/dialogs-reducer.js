const updateMessageBody = 'UPDATE-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case updateMessageBody:
            state.newMessageBody = action.messageBody;
            return state;
        case sendMessage:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.MessageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
    // if (action.type === updateMessageBody) {
    //     state.newMessageBody = action.messageBody;
    // } else if (action.type === sendMessage) {
    //     let body = state.newMessageBody;
    //     state.newMessageBody = '';
    //     state.MessageData.push({id: 6, message: body});
    // }
    // return state;

    // if (action.type === addPost) {
    // if (action.type === updateMessageBody) {
    //     this._state.dialogsPage.newMessageBody = action.messageBody ;
    //     this._callSubscriber(this._state)
    // }else if (action.type === sendMessage) {
    //     let body = this._state.dialogsPage.newMessageBody;
    //     this._state.dialogsPage.newMessageBody = '';
    //     this._state.dialogsPage.MessageData.push({id: 6, message: body });
    //     this._callSubscriber(this._state)
    // }
}

export const sendMessageCreator = () => ({type: sendMessage});
export const updateMessageCreator = (body) => ({type: updateMessageBody, messageBody: body});

export default dialogsReducer;