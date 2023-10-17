import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext);
    if (!user) return <h2>Not logged in</h2>

    return (
        <h1>Profile : {user.userName}</h1>
    )
}

export default Profile