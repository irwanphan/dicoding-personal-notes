import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppRoutes from './routes';
import { getAccessToken, getUserLogged } from './utils/network-data';
import { useLocation } from 'react-router-dom';

const App = () => {
  const [ token, setToken ] = useState(null);
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const { pathname } = useLocation();

  const loginCheck = async() => {
    try {
        const response = await getUserLogged();
        console.log(response)
        // setUser(response.data.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      const sessionToken = getAccessToken();
      setToken(sessionToken);
  }, [])
  useEffect(() => {
    if (token === null && (pathname !== '/login' && pathname !== '/register')) {
      console.log('no token');
      console.log('redirecting to login');
      window.location.href = '/login';
    }
    if (token) {
        loginCheck();
    }
    setIsLoading(false);
  }, [token]);

  if (isLoading) return (
    <div className='container'>
      <Header/>
      <p>Authenticating ...</p>
    </div>
  )

  return (
    <div className="container">
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export default App;
