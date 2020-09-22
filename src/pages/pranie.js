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

export default function Pranie() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - Pranie ekstrakcyjne</title>
        </Helmet>
        <LandingPodstrona haslo="Pranie ekstrakcyjne" opis="Twoje kanapy, dywany, wykładziny lub fotele samochodowe mogą wyglądać jak nowe! Sprawdź różnicę i rozsiądź się wygodnie."/>
    </div>);
}
