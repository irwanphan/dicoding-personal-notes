import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppRoutes from './routes';
import { getAccessToken, getUserLogged } from './utils/network-data';

const App = () => {
  const [ token, setToken ] = useState(null);
  const [ user, setUser ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const loginCheck = async() => {
    try {
        const response = await getUserLogged();
        setUser(response.data.data);
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      const sessionToken = getAccessToken();
      setToken(sessionToken);
  }, [])
  useEffect(() => {
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
