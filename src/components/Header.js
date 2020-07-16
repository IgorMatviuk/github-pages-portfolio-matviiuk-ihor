import React, { Component } from 'react';
import './Header.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


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
            <div className="menu">
                <ul>
                    <li><a href="/Home">Главная</a></li>
                    <li><a href="/AboutMe">Обо мне</a></li>
                    <li><a href="/Work">Работы</a></li>
                    <li><a href="/Contacts">Контакты</a></li>
                </ul>
            </div>
            <BrowserRouter>
                <Switch> 
                    <Route exact path="/"
                     render={() => <Home/>}/>
                    <Route exact path="/AboutMe"
                     render={() => <AboutMe/>}/>
                    <Route exact path="/Contacts" 
                    render={() => <Contacts/>}/>
                    <Route exact path="/Home"
                    render={() => <Home/>}/>
                    <Route exact path="/Work"
                    render={() => <Work/>}/>
                    
                </Switch>
            </BrowserRouter>
        </div>
        )
    }
}
