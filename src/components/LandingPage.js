import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

const LandingPage = () => {
    const data = useStaticQuery(graphql`
        query SliderQuery {
    landingPage: file(relativePath: { eq: "landingPage.png" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 550, maxHeight: 550) {
                ...GatsbyImageSharpFluid
            }
        }
    }}`);

    const handleScroll = (arg) => {
      if(typeof window !== 'undefined') {
          if(arg === "oferta") {
              window.scrollTo({
                 top: window.innerHeight,
                 behavior: "smooth"
              });
          }
      }
    };

    return (<main className="landingPage">
        <img className="logo" src={require("../../static/img/logo.png")} alt="burski-sprzatanie-logo" />
        <Img imgStyle={{objectPosition: '90% 10%' }} fluid={data.landingPage.childImageSharp.fluid} alt="burski-sprzatanie" />

        <menu>
            <ul>
                <li>Strona główna</li>
                <li onClick={() => handleScroll("oferta")}>Oferta</li>
                <li>O nas</li>
                <li>Kontakt</li>
            </ul>
            <div className="phoneNumber">
                <a href="tel:+48728879491">728 879 491</a>
            </div>
        </menu>

        <div className="buttonDiv">
            <button className="messengerBtn">
                <a href="https://m.me/burskisprzatanie" target="_blank">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                    <h3>Napisz do nas na messengerze</h3>
                </a>
            </button>

            <button className="phoneBtn">
                <a href="tel:+48728879491">
                    <img src={require("../../static/img/whatsapp.png")} alt="telefon" />
                    <h3>Zadzwoń do nas</h3>
                </a>
            </button>
        </div>

        <div className="haslo">
            <h1>Sprzątamy aż miło</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
        </div>

    </main>)
};

export default LandingPage;
