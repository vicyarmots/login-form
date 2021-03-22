import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../action/action'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const dispatch = useDispatch()
    const isLogged = useSelector((state) => state.isLogged)

    const handleInputChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const isValid = Object.values(user).every((item) => item)

    const submitUser = (event) => {
        event.preventDefault()
        setTimeout(() => {
            dispatch(logIn())
        }, 5000)
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
                {isLogged ? <h3>5 seconds left </h3> : ''}
            </div>
        </form>
    )
}

export default LoginForm
