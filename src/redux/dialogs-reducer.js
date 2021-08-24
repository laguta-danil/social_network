const updateMessageBody = 'UPDATE-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

let initialState = {
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


const dialogsReducer = (state = initialState, action) => {
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