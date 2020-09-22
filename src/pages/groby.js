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
        <LandingPodstrona haslo="Opieka nad grobami" opis="Każde zlecenie traktujemy indywidualnie, częstotliwość i zakres usług dopasowujemy do Twojego zapotrzebowania. Sprawdź, co możemy dla Ciebie zrobić, abyś Ty mógł się zająć swoim biznesem."/>
    </div>);
}