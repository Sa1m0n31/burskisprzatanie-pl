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

import LandingPage from "../components/LandingPage";
import Oferta from "../components/Oferta";
import DlaczegoMy from "../components/DlaczegoMy";
import Rekomendacje from "../components/Rekomendacje";
import Kontakt from "../components/Kontakt";
import ONas from "../components/ONas";
import Footer from "../components/Footer";

export default function Home() {
  return (<div className="app">
    <Helmet>
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v8.0"
              nonce="FDmu4cnd"></script>
    </Helmet>
    <LandingPage />
    <Oferta />
    <DlaczegoMy />
    <Rekomendacje />
    <Kontakt />
    <ONas />
    <Footer />
  </div>);
}
