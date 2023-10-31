import React from "react"
import { register } from "../../utils/network-data";

const RegisterPage = () => {
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleRegister(data);
    }

    const handleRegister = async (data) => {
        try {
            const response = await register(data);
            window.alert('User registered successfully');
            window.location.href = '/login';
        } catch (error) {
            console.log(error);
        }
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
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit">Register</button>
                <p>No account yet? <a href="/login">Login</a></p>
            </form>
        </div>
    )
}

export default RegisterPage;