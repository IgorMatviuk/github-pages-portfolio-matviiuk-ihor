import React, { Component } from 'react';
import './Contacts.scss';

import phone from '../source/contacts/phone.svg';
import gmail from '../source/contacts/gmail.svg';
import github from '../source/contacts/github.svg';
import linkedin from '../source/contacts/linkedin.svg';
import telegram from '../source/contacts/telegram.svg';
import instagram from '../source/contacts/instagram.svg';

import GoogleFontLoader from 'react-google-font-loader';

export default class Contacts extends Component {
    render() {
        return (
            <div className="contacts" style={{ fontFamily:'Roboto'}}>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Roboto',
          weights: [700],
        }
      ]}
    />
                <div className="cardc">
                    <div className="cardc__blue">
                        <div>Контакты</div>
                    </div>
                    <div className="cardc__list">
                        <div>
                            <div className="contact">
                                <div><img src={gmail} alt="vue" width="40px"  /> Почта: igor11.11.9988@gmail.com</div>
                            </div>
                            <div className="mysoc">
                                <p>Мои соц-сети</p>
                            </div>
                         <div className="social">
                                <div><a className="git" href="https://github.com/IgorMatviuk"><img src={github} alt="git" width="40px" className="git"/></a></div>
                                <div><a className="linkedin" href="https://www.linkedin.com/in/%D0%B8%D0%B3%D0%BE%D1%80%D1%8C-%D0%BC%D0%B0%D1%82%D0%B2%D0%B8%D1%8E%D0%BA-26ba261a1/"><img src={linkedin} alt="vue" width="40px"/></a></div>
                                <div><a className="telegram" href="https://t.me/Racibor"><img src={telegram} alt="vue" width="40px"/></a></div>
                                <div><a className="instagram" href="https://www.instagram.com/igor_matviuk_ratibor/"><img src={instagram} alt="vue" width="40px"/> </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
