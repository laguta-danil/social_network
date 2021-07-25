

let state = {
    profilePage: {
        postData: [
            {id:0, txt:'First post', likes:153},
            {id:1, txt:'Sekond post', likes:1312},
            {id:2, txt:'Third post', likes:31},
        ]},
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
        ]
    }

}

export let AddPosts = (postMessage) => {
    let newPost = {
        id: 5,
        txt: postMessage,
        likesCount: 0,
    };
    state.profilePage.postData.push(newPost);
}

export default state;
