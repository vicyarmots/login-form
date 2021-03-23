import { logIn } from './action'

export const isLoggedIn = () => (dispatch) => {
    setTimeout(() => {
        dispatch(logIn())
    }, 5000)
}
