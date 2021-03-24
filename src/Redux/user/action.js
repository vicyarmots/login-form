export const logIn = (email) => {
    return {
        type: 'SIGN IN',
        payload: email,
    }
}
