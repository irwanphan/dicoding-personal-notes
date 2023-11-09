import React, {useState} from "react"
import { register } from "../../utils/network-data";
import { useLocale } from "../../contexts/LocaleContext";

const RegisterPage = () => {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    const {isIndonesiaLocale} = useLocale()

    const onSubmiteHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsSubmitting(true);

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
            setIsSubmitting(false);
        }
    }
    
    return (
        <div className="auth-form-container">
            <form onSubmit={(e) => onSubmiteHandler(e)}>
                <label htmlFor="name">{isIndonesiaLocale ? 'Nama' : 'Name'}</label>
                <input 
                    id="name" 
                    type="text" 
                    placeholder="Name" 
                />
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
                        isIndonesiaLocale ? 'Daftar' : 'Register'
                    }
                </button>
                <p>{isIndonesiaLocale ? 'Sudah punya akun? ' : 'Have an account? '}
                    <a href="/login">{isIndonesiaLocale ? 'Masuk' : 'Login'}</a>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage;