import React, { useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

const LandingPodstrona = (props) => {

    useEffect(() => {
        if(typeof document !== 'undefined') {
            Object.prototype.styleSecondWord = function(styleHook){
                styleHook = styleHook || 'secondWord';
                var text = '',
                    words = [];
                for (var i = 0, len = this.length; i<len; i++){
                    words = (this[i].textContent || this[i].innerText).split(/\s+/);
                    if (words[1]) {
                        words[1] = '<span class="' + styleHook + '">' + words[1] + '</span>';
                        this[i].innerHTML = words.join(' ');
                    }
                }
            };

            document.getElementsByTagName('h1').styleSecondWord('blue');
        }
    });

    let data = useStaticQuery(graphql`
        query PodstronaQuery {
    biura: file(relativePath: { eq: "podstrona-biura.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    lokaleUzytkowe: file(relativePath: { eq: "podstrona-lokal.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    mieszkania: file(relativePath: { eq: "podstrona-mieszkania.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    pranie: file(relativePath: { eq: "podstrona-pranie.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    hoteleIApartamenty: file(relativePath: { eq: "podstrona-hotele-i-apartamenty.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    wnetrzeAuta: file(relativePath: { eq: "podstrona-wnetrze-auta.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    
    
    }`);

    switch(props.haslo) {
        case "Sprzątanie biura":
            data = data.biura;
            break;
        case "Lokale użytkowe":
            data = data.lokaleUzytkowe;
            break;
        case "Sprzątanie mieszkań":
            data = data.mieszkania;
            break;
        case "Pranie ekstrakcyjne":
            data = data.pranie;
            break;
        case "Hotele i apartamenty":
            data = data.hoteleIApartamenty;
            break;
        case "Wnętrze auta":
            data = data.wnetrzeAuta;
            break;
        default:
            data = data.wnetrzeAuta;
            break;
    }

    const goDown = () => {
        if((typeof window  !== 'undefined')&&(typeof document !== 'undefined')) {
            document.querySelector(".cennik").scrollIntoView({
                behavior: "smooth"
            });
        }
    };

    return (<main className="landingPage podstrona">
        <img className="logo" src={require("../../static/img/logo.png")} alt="burski-sprzatanie-logo" onClick={() => { window.location="/"; }} />
        <Img fluid={data.childImageSharp.fluid} alt={props.haslo} />

        <menu>
            <ul>
                <li>
                    <AniLink cover to="/" bg="#75C3DE">
                        Strona główna
                    </AniLink>
                </li>
                <li>Oferta</li>
                <li>O nas</li>
                <li>Kontakt</li>
            </ul>
            <div className="phoneNumber">
                <img src={require("../../static/img/telefon.png")} alt="telefon" />
                <a href="tel:+48728879491">728 879 491</a>
            </div>
        </menu>

        <div className="haslo">
            <h1>{props.haslo}</h1>
            <h2>{props.opis}</h2>
        </div>
    </main>);
};

export default LandingPodstrona;
