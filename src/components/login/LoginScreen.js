import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/')
        history.replace('/')
    }
    

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
