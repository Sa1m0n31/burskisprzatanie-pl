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

export default function HoteleIApartamenty() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - hotele</title>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v8.0"
                    nonce="FDmu4cnd"></script>
        </Helmet>
        <LandingPodstrona haslo="Hotele i apartamenty" opis="Jakiś tekst. Zobacz co możemy dla Ciebie zrobić, abyś Ty mógł się zająć swoim biznesem."/>
    </div>);
}
