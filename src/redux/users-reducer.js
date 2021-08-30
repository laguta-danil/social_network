const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    usersNames: [
        {userId: 0, photoUrl: 'https://lh3.googleusercontent.com/proxy/dprGJFVBWCgQMr9llK3m_U1s34Y6l8-8szuT2YEmsth2Pn4IDKRO9OUyUmCJRHr0jP6NLQGEoGCFNC8f8XMUIjpuejrTaO7nZZ6RVHslnp14AeVZI_10tjo', followed: false, firstName: 'Serhei', lastName: 'Chyrilov',
            status: 'I am a Boss', location: { city: 'Urugvai', country: 'Africa'}},
        {userId: 1, photoUrl: 'https://lh3.googleusercontent.com/proxy/dprGJFVBWCgQMr9llK3m_U1s34Y6l8-8szuT2YEmsth2Pn4IDKRO9OUyUmCJRHr0jP6NLQGEoGCFNC8f8XMUIjpuejrTaO7nZZ6RVHslnp14AeVZI_10tjo',  followed: false, firstName: 'Ivan', lastName: 'Terlovoi',
            status: 'I am a Boss too', location: { city: 'Kharkov', country: 'Ukrain'}},
        {userId: 2, photoUrl: 'https://lh3.googleusercontent.com/proxy/dprGJFVBWCgQMr9llK3m_U1s34Y6l8-8szuT2YEmsth2Pn4IDKRO9OUyUmCJRHr0jP6NLQGEoGCFNC8f8XMUIjpuejrTaO7nZZ6RVHslnp14AeVZI_10tjo',  followed: false, firstName: 'Taras', lastName: 'Kachanov',
            status: 'Dayn', location: { city: 'Boston', country: 'USA'}},
        {userId: 3, photoUrl: 'https://lh3.googleusercontent.com/proxy/dprGJFVBWCgQMr9llK3m_U1s34Y6l8-8szuT2YEmsth2Pn4IDKRO9OUyUmCJRHr0jP6NLQGEoGCFNC8f8XMUIjpuejrTaO7nZZ6RVHslnp14AeVZI_10tjo',  followed: true, firstName: 'Masha', lastName: 'Morskii',
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