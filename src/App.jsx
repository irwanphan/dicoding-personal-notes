import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import AppRoutes from './routes';
import { getAccessToken, getUserLogged } from './utils/network-data';
import { useLocation } from 'react-router-dom';
import UserBadge from './components/UserBadge';

const App = () => {
  const [ user, setUser ] = useState(null);
  const [ isChecking, setIsChecking ] = useState(true);
  const [ isLoading, setIsLoading ] = useState(true);
  const { pathname } = useLocation();

  const loginCheck = async() => {
    try {
      const resToken = await getAccessToken();
      if (!resToken) {
        console.log(pathname)
        console.log('no token');
        switch (pathname) {
          case '/login':
          case '/register':
            console.log('login / register');
            break;
          default:
            console.log('redirecting to login');
            window.location.href = '/login';
            break;
        }
      }
      if (resToken) {
        const response = await getUserLogged();
        setUser(response.data);
      }
      setIsChecking(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loginCheck();
  }, [])
  useEffect(() => {
    if (isChecking) return;
    setIsLoading(false);
  }, [isChecking])

  if (isLoading) return (
    <div className='container' >
      <Header/>
      <p>Authenticating ...</p>
    </div>
  )

  return (
    <div className="container">
      <Header/>
      { user && ( <UserBadge user={user}/> ) }
      <AppRoutes user={user}/>
    </div>
  )
}

export default App;
