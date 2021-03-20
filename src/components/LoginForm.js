import React, { useState } from 'react'

const LoginForm = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const handleInputChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value })
    }

    const disableCheck = Object.values(user).every((item) => item)

    const submitUser = (event) => {
        event.preventDefault()
        console.log(user)
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
                <button
                    type="sumbit"
                    onClick={submitUser}
                    disabled={!disableCheck}
                >
                    Submit
                </button>
            </div>
        </form>
    )
}

export default LoginForm
