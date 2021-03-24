const initState = {
    user: {
        email: null,
    },
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SIGN IN':
            return {
                ...state,
                user: { email: action.payload },
            }
        default:
            return state
    }
}

export default userReducer
