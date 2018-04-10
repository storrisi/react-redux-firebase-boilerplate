import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import s from './App.css';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <header className={s.AppHeader}>
          <img src={logo} className={s.AppLogo} alt="logo" />
          <h1 className={s.AppTitle}>Welcome to React</h1>
        </header>
        <p className={s.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
