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
import "../../static/style/cennik.css";
import "../../static/style/realizacje.css";

import '../../static/style/slick.css';

import LandingPage from "../components/LandingPage";
import Oferta from "../components/Oferta";
import DlaczegoMy from "../components/DlaczegoMy";
import Rekomendacje from "../components/Rekomendacje";
import Realizacje from "../components/Realizacje";
import Kontakt from "../components/Kontakt";
import ONas from "../components/ONas";
import Footer from "../components/Footer";

export default function Home() {
  return (<div className="app">
    <Helmet>
      <html lang="pl" />
      <title>Burski sprzątanie</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Burski sprzątanie - sprzątanie mieszkań, hoteli i samochodów." />
      <meta name="theme-color" content="#75C3DE" />
      <meta name="referrer" content="origin" />
      <link rel="icon" type="image/png" href={require("../../static/img/logo.png")} sizes="16x16" />
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v8.0"
                                                 nonce="FDmu4cnd"></script>
    </Helmet>
    <LandingPage />
    <Oferta />
    <DlaczegoMy />
    <Rekomendacje />
    <Realizacje />
    <Kontakt />
    <ONas />
    <Footer />
  </div>);
}
