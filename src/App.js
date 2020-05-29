import React from 'react';
import './typography.css';
import Header from './Header.js'
import Main from './Main.js'


function App() {
  return (
    <div className="app-root">
      <Header />

      <Main />

      <footer className="footer__container">
        <p className="text--size--sm">&copy; WP Pusher 2018 &middot; Terms of Service</p> 
      </footer>

    </div>
  );
}

export default App;
