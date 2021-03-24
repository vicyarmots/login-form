import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoggedIn } from '../Redux/user/middleware'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()

    const handleInputChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const isValid = Object.values(user).every((item) => item)

    const history = useHistory()

    const submitUser = (event) => {
        event.preventDefault()
        dispatch(setLoggedIn(user.email))
        history.push('/user')
        setUser({ email: '', password: '' })
    }

    return (
        <form>
            <div className="login-form">
                <h1>Sign In :</h1>
                <div className="form-group">
                    <label>Email </label>
                    <input
                        value={user.email}
                        placeholder="email"
                        onChange={handleInputChange}
                        name="email"
                        type="email"
                    />
                </div>

                <div className="form-group">
                    <label>Password </label>
                    <input
                        value={user.password}
                        placeholder="password"
                        onChange={handleInputChange}
                        name="password"
                        type="password"
                    />
                </div>

                <button type="sumbit" onClick={submitUser} disabled={!isValid}>
                    Submit
                </button>
            </div>
        </form>
    )
}

export default LoginForm
