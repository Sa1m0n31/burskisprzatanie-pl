import React, { useState, useRef, useEffect } from "react";

import TransitionLink from 'gatsby-plugin-transition-link';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Oferta = () => {

    const oferta1 = useRef(null);
    const oferta2 = useRef(null);
    const oferta3 = useRef(null);
    const oferta4 = useRef(null);
    const oferta5 = useRef(null);
    const oferta6 = useRef(null);
    const oferta7 = useRef(null);
    const oferta8 = useRef(null);
    const oferta9 = useRef(null);
    const oferta10 = useRef(null);

    const img1 = useRef(null);
    const img2 = useRef(null);
    const img3 = useRef(null);
    const img4 = useRef(null);
    const img5 = useRef(null);
    const img6 = useRef(null);
    const img7 = useRef(null);
    const img8 = useRef(null);
    const img9 = useRef(null);
    const img10 = useRef(null);

    const handleAnimation = (arg) => {
        switch(arg) {
            case 1:
                img1.current.classList.add("animation");
                break;
            case 2:
                img2.current.classList.add("animation");
                break;
            case 3:
                img3.current.classList.add("animation");
                break;
            case 4:
                img4.current.classList.add("animation");
                break;
            case 5:
                img5.current.classList.add("animation");
                break;
            case 6:
                img6.current.classList.add("animation");
                break;
            case 7:
                img7.current.classList.add("animation");
                break;
            case 8:
                img8.current.classList.add("animation");
                break;
            case 9:
                img9.current.classList.add("animation");
                break;
            case 10:
                img10.current.classList.add("animation");
                break;
            default:
                break;
        }
      setTimeout(() => {
          img1.current.classList.remove("animation");
          img2.current.classList.remove("animation");
          img3.current.classList.remove("animation");
          img4.current.classList.remove("animation");
          img5.current.classList.remove("animation");
          img6.current.classList.remove("animation");
          img7.current.classList.remove("animation");
          img8.current.classList.remove("animation");
          img9.current.classList.remove("animation");
          img10.current.classList.remove("animation");
      }, 800);
    };

    return (<section id="oferta" className="oferta">
        <h2>Właściwi <span className="blue">ludzie</span><br/>we właściwym miejscu</h2>
        <h3>Oferta dla klientów indywidualnych i biznesowych</h3>

        <div className="ofertaGrid">
            <div className="ofertaItem">
                <a href="/mieszkania" className="mobileOnly" />
                    <img src={require("../../static/img/dom.png")} alt="sprzatanie-domu" ref={img1} />
                    <h4>Mieszkania i domy</h4>
                    <button>
                        <AniLink bg="#75C3DE" cover to="/mieszkania" ref={oferta1} onMouseOver={() => handleAnimation(1)}>
                            Oferta
                        </AniLink>
                    </button>
            </div>
            <div className="ofertaItem">
                <a href="/hotele-i-apartamenty" className="mobileOnly"/>
                    <img src={require("../../static/img/hotel.png")} alt="hotele-i-apartamenty" ref={img2} />
                    <h4>Hotele i apartamenty</h4>
                    <button><a href="/hotele-i-apartamenty" ref={oferta2} onMouseOver={() => handleAnimation(2)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/biura" className="mobileOnly" />
                    <img src={require("../../static/img/biuro.png")} alt="biura" ref={img3}/>
                    <h4>Biura</h4>
                    <button><a href="/biura" ref={oferta3} onMouseOver={() => handleAnimation(3)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/pranie" className="mobileOnly" />
                    <img src={require("../../static/img/rug.png")} alt="tapicerki-i-dywany" ref={img4}/>
                    <h4>Tapicerki i dywany</h4>
                    <button><a href="/pranie" ref={oferta4} onMouseOver={() => handleAnimation(4)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/wnetrze-auta" className="mobileOnly" />
                    <img src={require("../../static/img/auto.png")} alt="auta" ref={img5}/>
                    <h4>Detailing wnętrza auta</h4>
                    <button><a href="/wnetrze-auta" ref={oferta5} onMouseOver={() => handleAnimation(5)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/groby" className="mobileOnly" />
                    <img src={require("../../static/img/grob.png")} alt="groby" ref={img6}/>
                    <h4>Groby</h4>
                    <button><a href="/groby" ref={oferta6} onMouseOver={() => handleAnimation(6)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/lokale-uzytkowe" className="mobileOnly" />
                    <img src={require("../../static/img/lokal.png")} alt="lokale-uzytkowe" ref={img7} />
                    <h4>Lokale użytkowe</h4>
                    <button><a href="/lokale-uzytkowe" ref={oferta7} onMouseOver={() => handleAnimation(7)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/po-remoncie" className="mobileOnly" />
                    <img src={require("../../static/img/remunt.png")} alt="po-remoncie" ref={img8} />
                    <h4>Po remoncie i budowie</h4>
                   <button><a href="/po-remoncie" ref={oferta8} onMouseOver={() => handleAnimation(8)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/mycie-okien" className="mobileOnly" />
                    <img src={require("../../static/img/okno.png")} alt="mycie-okien" ref={img9} />
                    <h4>Mycie okien</h4>
                    <button><a href="/mycie-okien" ref={oferta9} onMouseOver={() => handleAnimation(9)}>Oferta</a></button>
            </div>
            <div className="ofertaItem">
                <a href="/mycie-cisnieniowe" className="mobileOnly" />
                    <img src={require("../../static/img/karszer.png")} alt="mycie-cisnieniowe" ref={img10} />
                    <h4>Mycie ciśnieniowe</h4>
                    <button><a href="/mycie-cisnieniowe" ref={oferta10} onMouseOver={() => handleAnimation(10)}>Oferta</a></button>
            </div>
        </div>
    </section>);
};

export default Oferta;
