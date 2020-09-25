import React, { useEffect, useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import {ReCaptcha} from "react-recaptcha-v3";
import Modal from "react-modal";

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
                    if (words[2]) {
                        words[2] = '<span class="' + styleHook + '">' + words[2] + '</span>';
                        this[i].innerHTML = words.join(' ');
                    }
                }
            };

            document.getElementsByTagName('h1').styleSecondWord('blue');
        }
    });

    const [open, setOpen] = useState(false);
    const [valid, setValid] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [polityka, setPolityka] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [politykaError, setPolitykaError] = useState(false);
    const [send, setSend] = useState(false);

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
    groby: file(relativePath: { eq: "podstrona-groby.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    mycieOkien: file(relativePath: { eq: "podstrona-okna.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    mycieCisnieniowe: file(relativePath: { eq: "podstrona-cisnienie.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    poRemoncie: file(relativePath: { eq: "podstrona-remont.jpg" }) {
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
        case "Opieka nad grobami":
            data = data.groby;
            break;
        case "Sprzątanie po remoncie i budowie":
            data = data.poRemoncie;
            break;
        case "Mycie okien":
            data = data.mycieOkien;
            break;
        case "Mycie ciśnieniowe":
            data = data.mycieCisnieniowe;
            break;
        default:
            data = data.wnetrzeAuta;
            break;
    }

    const verifyCallback = (res) => {
        if(res) {
            setValid(true);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.id === "phoneNumberModal") {
            setPhoneNumber(e.target.value);
        }
        else {
            setPolityka(!polityka);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;

        if(!valid) isValid = false;

        /* Phone number validation */
        if((isNaN(phoneNumber))||(phoneNumber.length > 11)||((phoneNumber.length < 9))) {
            setPhoneError(true);
            isValid = false;
        }
        else {
            setPhoneError(false);
        }

        /* Polityka validation */
        if(!polityka) {
            setPolitykaError(true);
            isValid = false;
        }
        else {
            setPolitykaError(false);
        }

        if(isValid) {
            const form = e.target;
            const data = {
                numerTelefonu: phoneNumber,
                zlecenie: props.haslo
            };
            const xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                }
            };
            xhr.send(JSON.stringify(data));
            setPhoneNumber("");
            setPolityka(false);
            setSend(true);
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
                <li><a href="/#oferta">Oferta</a></li>
                <li><a href="/#dlaczegoMy">O nas</a></li>
                <li><a href="/#kontakt">Kontakt</a></li>
            </ul>
            <div className="phoneNumber">
                <img src={require("../../static/img/telefon.png")} alt="telefon" />
                <a href="tel:+48728879491">728 879 491</a>
            </div>
        </menu>

        <div className="haslo">
            <h1>{props.haslo}</h1>
            <h2 className="desktopOnly">{props.opis}</h2>
            <button className="podstronaCallToAction" onClick={() => { setOpen(true); }}>
                Dowiedz się wiecej
            </button>
        </div>

        <Modal portalClassName="formSend phoneForm" isOpen={open} closeTimeoutMS={500} onRequestClose={() => { setOpen(false); }}>
            <img className="x" src={require("../../static/img/x.png")} alt="exit" onClick={() => { setOpen(false); }}/>
            <img className="telefon" src={require("../../static/img/telefon-niebieski.png")} alt="telefon" />
            <h3>Zostaw do siebie numer, a my oddzwonimy do Ciebie jeszcze dzisiaj!</h3>
            <form action="https://formspree.io/moqpqzje" method="POST" onSubmit={e => handleSubmit(e)}>
                <input id="phoneNumberModal" className={phoneError ? "redBorder" : ""} type="text" name="phoneNumberModal" value={phoneNumber} onChange={(e) => handleChange(e)}/>
                <label id="politykaModal" onClick={e => handleChange(e)}>
                    <button id="politykaModal" name="polityka-prywatnosci" className={politykaError ? "redBorder" : ""}>
                        <div id="politykaModal" className={polityka ? "checkedPolityka" : ""} />
                    </button>
                    Zapoznałem się i akceptuję politykę prywatności
                </label>
                <ReCaptcha
                    sitekey="6LdZVs8ZAAAAALyZPpx4JXLGSz7bJ8uMgGIH_DTM"
                    render="implicit"
                    verifyCallback={(res) => verifyCallback(res)}
                />
                <button type="submit">Zatwierdź</button>
            </form>
        </Modal>

        <Modal isOpen={send} closeTimeoutMS={500} onRequestClose={() => { setSend(false); }} portalClassName="formSend">
            <img className="modalExit" src={require("../../static/img/x.png")} alt="exit" onClick={() => {setSend(false)} } />
            <div className="modalInner">
                <img className="okejka" src={require("../../static/img/okejka.png")} alt="ok" />
                <h2>Formularz wysłany!</h2>
                <h3>Odezwę się do Ciebie jak najszybciej!</h3>
            </div>
        </Modal>
    </main>);
};

export default LandingPodstrona;
