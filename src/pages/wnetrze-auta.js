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

export default function WnetrzeAuta() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - wnętrze auta</title>
        </Helmet>
        <LandingPodstrona haslo="Wnętrze auta" opis="Podróż kilkuletnim samochodem z wnętrzem jakbyś wyjechał z salonu? Dzięki naszej usłudze kompleksowego detailingowego czyszczenia wnętrza to możliwe!"/>
    </div>);
}
