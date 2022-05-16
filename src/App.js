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
import HomePageMobile from './pages/HomePage/HomePageMobile';
import DemoAntDesign from './pages/DemoAntDesign/DemoAntDesign';
import PhoneIndex from './Templates/PhoneIndex/PhoneIndex';
export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={"/sassdemo"} component={PhoneIndex}/>
        <LoginTemplate path="/login" component={Login}/>
        <HomeTemplate path="/antd" component={DemoAntDesign} />
        <HomeTemplate path="/home" component={HomePage} componentMobile={HomePageMobile}/>
        <HomeTemplate  componentMobile={HomePageMobile} path="/" component={HomePage}/>

      </Switch>
    </Router>
  );
}

export default App;
