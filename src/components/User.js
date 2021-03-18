import React from 'react'

const User = ({ email, password }) => {
     return (
          <div className="user-form">
               <span>Email : {email}</span>
               <span>Password : {password}</span>
          </div>
     )
}

export default User
