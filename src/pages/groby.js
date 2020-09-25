import React from "react"

import Helmet from 'react-helmet';

import '../../static/style/global.css';
import '../../static/style/landing-page.css';
import '../../static/style/oferta.css';
import '../../static/style/dlaczego-my.css';
import '../../static/style/rekomendacje.css';
import '../../static/style/kontakt.css';
import '../../static/style/o-nas.css';
import '../../static/style/footer.css';

import LandingPodstrona from "../components/LandingPodstrona";

export default function Groby() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - opieka nad grobami</title>
        </Helmet>
        <LandingPodstrona haslo="Opieka nad grobami" opis="Uporządkujemy nagrobek i postawimy znicz aby uhonorować Twoich bliskich lub odświeżymy płytę nagrobka z pomocą cichej myjki ciśnieniowej."/>
    </div>);
}
