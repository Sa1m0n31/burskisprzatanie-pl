import React from "react"

import '../../static/style/global.css';
import '../../static/style/landing-page.css';
import '../../static/style/oferta.css';

import LandingPage from "../components/LandingPage";
import Oferta from "../components/Oferta";

export default function Home() {
  return (<div className="app">
    <LandingPage />
    <Oferta />
  </div>);
}
