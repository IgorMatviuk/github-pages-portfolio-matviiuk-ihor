import React, { Component } from 'react';
import './AboutMe.scss';
import ReactLogo from '../source/logo/ReactLogo.svg';
import VueLogo from '../source/logo/VueLogo.svg';
import ElectronLogo from '../source/logo/ElectronLogo.svg';
import AdobeI from '../source/logo/AdobeI.svg';
import AdobeP from '../source/logo/AdobeP.svg';
import AdobeX from '../source/logo/AdobeX.svg';
import BeetRootALogo from '../source/logo/BeetRootALogo.svg';

import GoogleFontLoader from 'react-google-font-loader';

export default class AboutMe extends Component {
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
                <div className="cards__section">
                    <div className="card">
                        <div className="card__blue card__header__text">
                            <p style={{ fontFamily:'Roboto'}}>Навыки</p>
                        </div>
                        <div className="skills" style={{ fontFamily:'Roboto'}}> 
                            <p>HTML/CSS</p>
                            <p>SCSS/SAS</p>
                            <p>JavaScript(ES6)</p>
                            <div className="frame">
                            <p className="tReact"><img src={ReactLogo} alt="react" width="50px" style={{backgroundColor: 'black', borderRadius: '45%'}}/>  React (Router, Redux)</p>
                            <p className="tVue"> <img src={VueLogo} alt="vue" width="40px" /> Vue</p>
                            <p className="tElectron"> <img src={ElectronLogo} alt="electron" width="40px" /> Electron js</p>
                            </div>
                            <p>Git, webpack, npm, yarn</p>
                            <p>bootstrap, react-bootstrap, jQuery</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__red card__header__text">
                            <p style={{ fontFamily:'Roboto'}}>Другие навыки</p>
                        </div>
                        <div className="otherSkills" style={{ fontFamily:'Roboto'}}>
                            <div className="adobe">
                            <div><p><img src={AdobeP} alt="vue" width="40px" /> Adobe Photoshop</p></div>
                            <div><p><img src={AdobeI} alt="vue" width="40px" /> Adobe Illustrator</p></div>
                            <div className="adobexd"><p><img src={AdobeX} alt="vue" width="40px" /> Adobe XD</p></div>
                            </div>
                            <div><p>Bash (linux)</p></div>
                            <div><p>.NET Framework(C#)(знаком)</p></div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__green card__header__text">
                            <p style={{ fontFamily:'Roboto'}}>Гибкие навыки</p>
                        </div> 
                        <div className="softSkills" style={{ fontFamily:'Roboto'}}>
                            <div>
                                <p className="com">Коммуникабельность</p>
                                <div className="comL">
                                <p>Нейтральное отношение к религиям, социальным классам, расам</p>
                                <p>Имеется опыт коммуникации полученный при работе в общепите</p>
                                <p>Быстрая адаптация в новом кругу общения </p> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__yellow card__header__text">
                            <p style={{ fontFamily:'Roboto'}}>Образование</p>
                        </div>
                        <div className="education" style={{ fontFamily:'Roboto'}}>
                            <div className="beetrootAcademy">  
                                <div><p><img src={BeetRootALogo} alt="vue" width="90px" /></p></div>
                                <div><p className="beetroot">Beetroot</p><p className="academy">Academy</p><p className="end">Выпуск 2019-2020</p></div>
                            </div>
                        </div>
                        <div className="education__text"><p>В дальнейшем самообучение</p></div>
                    </div>
                    <div className="card">
                        <div className="card__pink card__header__text">
                            <p style={{ fontFamily:'Roboto'}}>Опыт</p>
                        </div>
                        <div className="experience" style={{ fontFamily:'Roboto'}}>
                            <div><p>freelance: сайты на wordpress</p></div>
                            <div><p>open source (маленькие веб-приложения на github)</p></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
