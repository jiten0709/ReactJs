import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) return <div>Login First!</div>

    return <div>Hello {user.username}</div>
}

export default Profile