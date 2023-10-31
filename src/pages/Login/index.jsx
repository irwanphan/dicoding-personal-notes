import React from "react"
import Utils from "../../utils";
import Config from "../../config/config";
import { login, putAccessToken } from "../../utils/network-data";

const LoginPage = () => {
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleLogin(data);
    }

    const handleLogin = async (data) => {
        try {
            const response = await login(data)
                .then((res) => putAccessToken(res.data.accessToken));
            window.alert('User logged in successfully');
            window.location.href = '/';
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <div className="auth-form-container">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
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
                <button type="submit">Login</button>
                <p>No account yet? <a href="/register">Register</a></p>
            </form>
        </div>
    )
}

export default LoginPage;