import React from 'react';
import Header from './components/Header';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="container">
      <Header/>
      <AppRoutes/>
    </div>
  )
}

export default App;
