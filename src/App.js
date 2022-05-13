import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Fragment } from 'react';
import HeaderHome from './pages/_Components/HeaderHome';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/LoginPage/Login';
import HocDemo from './pages/HOCDemo/HocDemo';
import HomeTemplate from './Templates/HomeTemplate/HomeTemplate';
import LoginTemplate from './Templates/LoginTemplate/LoginTemplate';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <LoginTemplate path="/login" component={Login}/>
        <HomeTemplate path="/home" component={HomePage}/>
        <HomeTemplate path="/" component={HomePage}/>
      </Switch>
    </Router>
  );
}

export default App;
