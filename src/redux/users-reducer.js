const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const SET_LOADING = 'SET_LOADING'

let initialState = {
    users:[],
    pageSize: 4,
    totalUserCount: 0,
    currentPage: 3,
    isFetching: true,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.usersNames}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        case SET_LOADING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return (state)

    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUser = (usersNames) => ({type: SET_USERS, usersNames})
export const setCurrentPage = (currentPage) => ({type:SET_CURRENT_PAGE, currentPage:currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({type:SET_USERS_TOTAL_COUNT, count:totalUsersCount })
export const setLoader = (isFetching) => ({type:SET_LOADING, isFetching})

export default usersReducer;