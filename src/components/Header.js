import React, { Component } from 'react';
import './Header.scss';
import {HashRouter, Switch, Route, NavLink} from 'react-router-dom';


import AboutMe from './AboutMe';
import Contacts from './Contacts';
import Home from './Home';
import Error from './Error';
import Work from './Work';

import GoogleFontLoader from 'react-google-font-loader';

export default class Header extends Component {
    render() {
        return (
        <div>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Roboto',
          weights: [700],
        }
      ]}
    />
            <div className="header">
                <div className="header__logo" style={{ fontFamily:'Roboto'}}>Игорь Матвиюк</div>
            </div>
            <HashRouter>
            <div className="menu">
                <ul>
                    <NavLink to="/Home">Главная</NavLink>
                    <NavLink to="/AboutMe">Обо мне</NavLink>
                    <NavLink to="/Work">Работы</NavLink>
                    <NavLink to="/Contacts">Контакты</NavLink>
                </ul>
            </div>
            
                <Switch> 
                    <Route path="/"
                     render={() => <Home/>}/>
                    <Route path="/AboutMe"
                     render={() => <AboutMe/>}/>
                    <Route path="/Contacts" 
                    render={() => <Contacts/>}/>
                    <Route path="/Home"
                    render={() => <Home/>}/>
                    <Route path="/Work"
                    render={() => <Work/>}/>
                    
                </Switch>
            </HashRouter>
        </div>
        )
    }
}
