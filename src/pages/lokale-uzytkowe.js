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

export default function LokaleUzytkowe() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - biura</title>
        </Helmet>
        <LandingPodstrona haslo="Lokale użytkowe" opis="Niech klienci czują się u Ciebie dobrze dzięki uderzającej czystości. Sprawdź jakie rodzaje placówek sprzątamy."/>
        <Cennik opis="Niech klienci czują się u Ciebie dobrze dzięki uderzającej czystości. Sprawdź jakie rodzaje placówek sprzątamy." />
        <ONas/>
        <Footer/>
    </div>);
}
