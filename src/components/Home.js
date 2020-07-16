import React, { Component } from 'react';
import './Home.scss'

import photo2 from '../source/photo/photo2.jpg';
import photo3 from '../source/photo/photo3.jpg';

import GoogleFontLoader from 'react-google-font-loader';

export default class Home extends Component {
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
                <section className="sectionName">
                    <div className="textLogo">
                        <div>
                        <p className="textLogo1" style={{ fontFamily:'Roboto'}}>Front-end developer</p>
                        </div>
                        <div>
                        <p className="textLogo2" style={{ fontFamily:'Roboto'}}>Игорь Матвиюк</p>
                        </div> 
                    </div>
                </section>
                <section className="sectionBase section1">
                    <div>
                        <div className="s1logo">
                            <p style={{ fontFamily:'Roboto'}}>Кратко обо мне</p>
                        </div>
                        <div className="spaceAround">
                            <div>
                                <div className="cardInfo"> 
                                    <div className="cardwInfoHeader" style={{ fontFamily:'Roboto'}}>
                                        Обучение на курсах
                                    </div>
                                    <div className="s1text" style={{ fontFamily:'Roboto'}}>
                                        Между 2019-2020 годами проходил обучение на front-end разработчика в Beetroot academy, там я изучил верстку HTML/CSS, базовые понятия JavaScript, и библиотеки VUE
                                    </div>
                                </div>
                            </div>
                            <div><img src={photo3} width="450px" alt="photo3"/></div>
                        </div>
                    </div>
                </section>
                <section className="sectionBase">
                    <div>
                        <div className="section2 spaceAround">
                        <div><img src={photo2} width="350px" alt="photo2"/></div>
                            <div>
                                <div className="cardInfo1"> 
                                    <div className="cardwInfoHeader1" style={{ fontFamily:'Roboto'}}>
                                    Фриланс и самообучение
                                    </div>
                                    <div className="s2text" style={{ fontFamily:'Roboto'}}>
                                        Далее прошел 2 собеседования, понял то что мне не хватает опыта, а так же что на VUE редко кто пишет, далее начал изучать JavaScript и React, параллельно сдал несколько сайтов под ключ на WordPress, получил опыт работы с заказщиком, на данный момент имею 2 проекта на React с API
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
