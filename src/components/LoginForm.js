import React, { useState } from 'react'

const LoginForm = () => {
     const [user, setUser] = useState({
          email: '',
          password: '',
     })

     const handleUserEmail = (event) => {
          setUser((prevState) => ({
               ...prevState,
               email: event.target.value,
          }))
     }

     const handleUserPassword = (event) => {
          setUser((prevState) => ({
               ...prevState,
               password: event.target.value,
          }))
     }

     const submitUser = (event) => {
          event.preventDefault()
          if (user.email !== '' && user.password !== '') {
               console.log(`Email : ${user.email}`)
               console.log(`Password: ${user.password}`)
          } else {
               return
          }
          setUser({ email: '', password: '' })
     }

     return (
          <form>
               <div className="login-form">
                    <h1>Sign In :</h1>
                    <div className="form-group">
                         <lable>Email :</lable>
                         <input
                              value={user.email}
                              placeholder="email"
                              onChange={handleUserEmail}
                              name="email"
                              type="email"
                         />
                    </div>

                    <div className="form-group">
                         <lable>Password :</lable>
                         <input
                              value={user.password}
                              placeholder="password"
                              onChange={handleUserPassword}
                              name="password"
                              type="password"
                         />
                    </div>
                    <button type="sumbit" onClick={submitUser}>
                         Submit
                    </button>
               </div>
          </form>
     )
}

export default LoginForm
