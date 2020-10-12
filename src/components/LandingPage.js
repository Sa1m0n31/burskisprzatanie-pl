import React, { useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { bubble as HamburgerMenu } from 'react-burger-menu';
import { Link } from 'react-scroll';

const LandingPage = () => {

    useEffect(() => {
        if(localStorage.getItem("aim")) {
            let aim = localStorage.getItem("aim");
            localStorage.removeItem("aim");
            if(typeof document !== 'undefined') {
                document.querySelector(aim).scrollIntoView({behavior: "smooth"});
            }
        }
    });


    let styles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#373a47'
        },
        bmBurgerBarsHover: {
            background: '#a90000'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmItem: {
            display: 'inline-block'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    };

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
      if((typeof window !== 'undefined')&&(typeof document !== 'undefined')) {
          if(arg === "oferta") {
              document.querySelector(".oferta").scrollIntoView({behavior: "smooth"});
          }
          else if(arg === "dlaczegoMy") {
              document.querySelector(".dlaczegoMy").scrollIntoView({behavior: "smooth"});
          }
          else if(arg === "kontakt") {
              document.querySelector(".kontakt").scrollIntoView({behavior: "smooth"});
          }
      }
    };

    return (<main className="landingPage">
        <img className="logo" src={require("../../static/img/logo.png")} alt="burski-sprzatanie-logo" />
        <Img imgStyle={{objectPosition: '40% 0%' }} fluid={data.landingPage.childImageSharp.fluid} alt="burski-sprzatanie" />

        <menu className="no-select">
            <ul>
                <li>Strona główna</li>
                <li onClick={() => handleScroll("oferta")}>Oferta</li>
                <li onClick={() => handleScroll("dlaczegoMy")}>O nas</li>
                <li onClick={() => handleScroll("kontakt")}>Kontakt</li>
            </ul>
            <div className="phoneNumber">
                <img src={require("../../static/img/telefon.png")} alt="telefon" />
                <a href="tel:+48728879491">728 879 491</a>
            </div>
        </menu>

        <div className="buttonDiv">
            <button className="messengerBtn">
                <a href="https://m.me/burskisprzatanie" target="_blank" rel="noreferrer">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                    <h3>Napisz do nas na messengerze</h3>
                </a>
            </button>

            <button className="phoneBtn">
                <a href="tel:+48728879491" rel="noreferrer">
                    <img src={require("../../static/img/whatsapp.png")} alt="telefon" />
                    <h3>Zadzwoń do nas</h3>
                </a>
            </button>
        </div>

        <div className="haslo">
            <h1>Sprzątamy <span className="blue">za Ciebie</span></h1>
            <h2>Czysta oszczędność czasu</h2>
        </div>

        <div className="mobileOnly hamburgerMenu">
            <HamburgerMenu styles={styles} onStateChange={() => { console.log("State change"); }}>
                <Link
                    activeClass="active"
                    to="oferta"
                    smooth={true}
                    duration={500}
                >OFERTA</Link>
                <Link
                    activeClass="active"
                    to="kontakt"
                    smooth={true}
                    duration={500}
                >KONTAKT</Link>
                <Link
                    activeClass="active"
                    to="realizacje"
                    smooth={true}
                    duration={500}
                >NASZE REALIZACJE</Link>
            </HamburgerMenu>
        </div>

        <div className="mobileOnly leftBtns">
            <button className="messengerBtn">
                <a href="https://m.me/burskisprzatanie" target="_blank" rel="noreferrer">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                </a>
            </button>

            <button className="phoneBtn">
                <a href="tel:+48728879491">
                    <img src={require("../../static/img/whatsapp.png")} alt="telefon" />
                </a>
            </button>
        </div>

    </main>)
};

export default LandingPage;
