import React, { useState } from 'react'

const LoginForm = () => {
     const [loginForm, setLoginForm] = useState({
          email: null,
          password: null,
     })

     const handleLoginForm = (user) => {
          if (user.email) {
               setLoginForm((prevState) => ({
                    ...prevState,
                    email: user.email,
               }))
          }
          if (user.password) {
               setLoginForm((prevState) => ({
                    ...prevState,
                    password: user.password,
               }))
          }
     }

     const handleEmailChange = (event) => {
          handleLoginForm({ email: event.target.value })
     }

     const handlePasswordChange = (event) => {
          event.preventDefault()
          handleLoginForm({ password: event.target.value })
     }

     const submitUser = (event) => {
          event.preventDefault()
          if (loginForm.email !== '' && loginForm.password !== '') {
               console.log(`Email : ${loginForm.email}`)
               console.log(`Password: ${loginForm.password}`)
          } else {
               return
          }
          setLoginForm({ email: '', password: '' })
     }

     return (
          <div className="login-form">
               <input
                    value={loginForm.email}
                    placeholder="email"
                    onChange={handleEmailChange}
               />
               <input
                    value={loginForm.password}
                    placeholder="password"
                    onChange={handlePasswordChange}
               />
               <button onClick={submitUser}>Submit</button>
          </div>
     )
}

export default LoginForm
