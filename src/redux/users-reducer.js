const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersNames: [
        {userId: 0, photoUrl: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879388.jpg', followed: false, firstName: 'Serhei', lastName: 'Chyrilov',
            status: 'I am a Boss', location: { city: 'Urugvai', country: 'Africa'}},
        {userId: 1, photoUrl: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879388.jpg',  followed: false, firstName: 'Ivan', lastName: 'Terlovoi',
            status: 'I am a Boss too', location: { city: 'Kharkov', country: 'Ukrain'}},
        {userId: 2, photoUrl: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879388.jpg',  followed: false, firstName: 'Taras', lastName: 'Kachanov',
            status: 'Dayn', location: { city: 'Boston', country: 'USA'}},
        {userId: 3, photoUrl: 'http://bm.img.com.ua/nxs/img/prikol/images/large/1/2/308321_879388.jpg',  followed: true, firstName: 'Masha', lastName: 'Morskii',
            status: 'I am a quin', location: { city: 'Moskov', country: 'Russia'}},
    ]


}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersNames: state.usersNames.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                usersNames: state.usersNames.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, usersNames: [...state.usersNames, ...action.usersNames]}
        }
        default:
            return (state)

    }

}

export const followAC = (userId) => ({ type: FOLLOW, userId})
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})
export const setUsers = (usersNames) => ({ type: SET_USERS, usersNames})

export default usersReducer;