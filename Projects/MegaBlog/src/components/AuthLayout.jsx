import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // 1. Checks if the authentication prop is true and the authStatus is not equal to true. If so, it redirects the user to the login page ("/login").
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } 
        // 2. Checks if the authentication prop is false and the authStatus is not equal to false. If so, it redirects the user to the root page ("/").
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}