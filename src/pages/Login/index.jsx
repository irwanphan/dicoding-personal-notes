import React from "react"
import Auth from "../../utils/auth";
import Utils from "../../utils";
import Config from "../../config/config";

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
            const response = await Auth.login(data);
            Utils.setUserToken(Config.USER_TOKEN_KEY, response.data.data.accessToken);
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