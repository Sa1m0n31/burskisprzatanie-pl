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

export default function MycieOkien() {
    return (<div className="app">
        <Helmet>
            <title>BurskiSprzątanie - mycie okien</title>
        </Helmet>
        <LandingPodstrona haslo="Mycie okien" opis="Umycie okien bywa niezwykle czasochłonne a walka ze smugami to niekiedy prawdziwa wojna. Zostaw to nam. Dzięki naszemu procesowi mycia zapomnisz o istnieniu smug."/>
        <Cennik opis="Umycie okien bywa niezwykle czasochłonne a walka ze smugami to niekiedy prawdziwa wojna. Zostaw to nam. Dzięki naszemu procesowi mycia zapomnisz o istnieniu smug." />
        <ONas/>
        <Footer/>
    </div>);
}
