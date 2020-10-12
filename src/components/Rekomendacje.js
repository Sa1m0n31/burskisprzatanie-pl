import React from "react";

import StarRatings from 'react-star-ratings';

const Rekomendacje = () => {
    return (<section className="rekomendacje">
        <h2>Rekomendacje</h2>
        <div className="rekomendacjeInner">
            <div className="opinia no-select">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank" rel="noreferrer">
                <img className="avatar" src={require("../../static/img/b.jpg")} alt="avatar" />
                <StarRatings
                    className="ocena"
                    rating={5}
                    numberOfStars={5}
                    starRatedColor="#FFD700"
                    starDimension='20px'
                />
                <h3 className="imie">Bartek</h3>
                <div className="data">21 września 2020</div>
                <p className="text">Wszystko w jak najlepszym porządku. Zarówno kontakt z Panem Łukaszem, jak i wykonanie samej usługi sprzątania jest godne polecenia.</p>
                <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
            <div className="opinia no-select">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank" rel="noreferrer">
                    <img className="avatar" src={require("../../static/img/a.jpg")} alt="avatar" />
                    <StarRatings
                        className="ocena"
                        rating={5}
                        numberOfStars={5}
                        starRatedColor="#FFD700"
                        starDimension='20px'
                    />
                    <h3 className="imie">Aleksander</h3>
                    <div className="data">19 września 2020</div>
                    <p className="text">Solidnie wykonana robota w uczciwej cenie. Polecam.</p>
                    <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
            <div className="opinia no-select">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank" rel="noreferrer">
                    <img className="avatar" src={require("../../static/img/s.jpg")} alt="avatar" />
                    <StarRatings
                        className="ocena"
                        rating={5}
                        numberOfStars={5}
                        starRatedColor="#FFD700"
                        starDimension='20px'
                    />
                    <h3 className="imie">Szymon</h3>
                    <div className="data">18 września 2020</div>
                    <p className="text">Perfekcyjnie czyściutkie okna, wszystko na czas, przemiła obsługa. Zdecydowanie polecam.</p>
                    <img className="opinieFixly" src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" alt="fixly" />
                </a>
            </div>
        </div>
    </section>);
};

export default Rekomendacje;
