import React, {useState} from "react"
import { login, putAccessToken } from "../../utils/network-data";
import { useLocale } from "../../contexts/LocaleContext";

const LoginPage = () => {
    const {isIndonesiaLocale} = useLocale()
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const onSubmiteHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);
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
            setIsSubmitting(false);
        }
    }
    
    return (
        <div className="auth-form-container">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
                <label htmlFor="email">{isIndonesiaLocale ? 'Surel' : 'Email'}</label>
                <input 
                    id="email" 
                    type="text" 
                    placeholder="Email" 
                />
                <label htmlFor="password">{isIndonesiaLocale ? 'Kata Sandi' : 'Password'}</label>
                <input 
                    id="password" 
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit"
                    disabled={isSubmitting}
                >
                    {
                        isSubmitting && isIndonesiaLocale ? 'Sedang dikirim ...' :
                        isSubmitting && !isIndonesiaLocale ? 'Submitting ...' :
                        isIndonesiaLocale ? 'Masuk' : 'Login'
                    }
                </button>
                <p>{isIndonesiaLocale ? 'Belum punya akun? ' : 'No account yet? '}
                    <a href="/register">{isIndonesiaLocale ? 'Daftar' : 'Register'}</a>
                </p>
            </form>
        </div>
    )
}

export default LoginPage;