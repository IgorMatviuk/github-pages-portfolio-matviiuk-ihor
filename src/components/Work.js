import React, { Component } from 'react'
import './Work.scss'

import covid from '../source/work/covid.png';
import weather from '../source/work/Weather.png';

import GoogleFontLoader from 'react-google-font-loader';

export default class work extends Component {
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
                <section className="sectionFlex"> 
                    <div className="cardw0text">
                        <div className="cardw0textheader"></div>
                        <div className="cardw0__text" style={{ fontFamily:'Roboto'}}>
                        Приложение для просмотра погоды по городам всего мира, поиск воспринимает большинство мировых языков, в приложении используется Weatherbit API для отображения данных о погоде
                        </div>
                        <div>
                            <form className="form" action="https://igormatviuk.github.io/github-pages-react-weather/">
                            <button className="Button">Посмотреть</button>
                            </form>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={weather} alt="vue"/>
                    </div>
                </section>
                <section className="sectionFlex">
                    <div className="cardw1">
                        <div className="cardw1Header"></div>
                        <div className="cardw1__text" style={{ fontFamily:'Roboto'}}>
                        Приложение трекер вируса COVID-19 с данными актуальными на сегодняшний день, а так же итоговые данные за все время эпидемии, в приложении используется covid19 API для отображения актуальных данных
                        </div>
                        <div>
                            <form className="form" action="https://igormatviuk.github.io/github-pages-COVID-Ukraine-React/">
                            <button className="Button">Посмотреть</button>
                            </form>
                        </div>
                    </div>
                    <div className="imgContainer">
                        <img src={covid} alt="vue"/>
                    </div>
                </section>
                <section></section>
            </div>
        )
    }
}
