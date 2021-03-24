import { logIn } from './action'

export const setLoggedIn = (email) => (dispatch) => {
    setTimeout(() => {
        dispatch(logIn(email))
    }, 2000)
}
