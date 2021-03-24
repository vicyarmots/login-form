const initState = {
    email: '',
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGN IN':
            return {
                ...state,
                email: action.payload,
            }
        default:
            return state
    }
}

export default userReducer
