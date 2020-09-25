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

export default function MycieCisnieniowe() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - mycie ciśnieniowe</title>
        </Helmet>
        <LandingPodstrona haslo="Mycie ciśnieniowe" opis="Oczyść swoją kostkę lub elewację z mchu, graffiti i innych zanieczyszczeń."/>
        <Cennik opis="Oczyść swoją kostkę lub elewację z mchu, graffiti i innych zanieczyszczeń." />
        <ONas/>
        <Footer/>
    </div>);
}
