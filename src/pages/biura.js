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
import Cennik from "../components/Cennik";
import ONas from "../components/ONas";
import Footer from "../components/Footer";

export default function Biura() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - biura</title>
        </Helmet>
        <LandingPodstrona haslo="Sprzątanie biura" opis="Każde zlecenie traktujemy indywidualnie, częstotliwość i zakres usług dopasowujemy do Twojego zapotrzebowania. Sprawdź, co możemy dla Ciebie zrobić, abyś Ty mógł się zająć swoim biznesem."/>
        <Cennik opis="Każde zlecenie traktujemy indywidualnie, częstotliwość i zakres usług dopasowujemy do Twojego zapotrzebowania. Sprawdź, co możemy dla Ciebie zrobić, abyś Ty mógł się zająć swoim biznesem." />
        <ONas />
        <Footer />
    </div>);
}
