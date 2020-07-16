import React, { Component } from 'react';
import './Header.scss';
import {HashRouter, Route} from 'react-router-dom';


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
            <HashRouter basename="/github-pages-portfolio-matviiuk-ihor"> 
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/AboutMe" component={AboutMe}/>
                    <Route exact path="/Contacts" component={Contacts}/>
                    <Route exact path="/Home" component={Home}/>
                    <Route exact path="/Work" component={Work}/>
                    <Route component={Error}/>
            </HashRouter>
        </div>
        )
    }
}
