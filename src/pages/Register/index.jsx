import React from "react"

const RegisterPage = () => {
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        console.log('submit');
    }
    
    return (
        <div className="auth-form-container">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
                <label htmlFor="name">Name</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="Name" 
                />

                <label htmlFor="email">Email</label>
                <input 
                    id="email" 
                    type="text" 
                    placeholder="Email" 
                />

                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    placeholder="Password" 
                />

                <button type="submit">Login</button>
                <p>No account yet? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}

export default RegisterPage;