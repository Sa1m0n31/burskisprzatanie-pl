import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

const ONas = () => {
    const data = useStaticQuery(graphql`
        query ONasQuery {
    onas: file(relativePath: { eq: "lukasz.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1500, maxHeight: 1500) {
                ...GatsbyImageSharpFluid
            }
        }
    }}
    `);

    return (<section className="oNas">
        <div className="oNasInner">
        {/*<h2>O nas</h2>
        <div className="oNasInner">
            <Img fluid={data.onas.childImageSharp.fluid} />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus turpis nec fringilla viverra. Maecenas et lacus malesuada, consequat felis ac, accumsan lacus. Nunc lacinia bibendum laoreet. Aliquam auctor in elit eget semper. Quisque convallis ullamcorper mi a rhoncus. Fusce at ante urna. Mauris luctus dui et nulla lacinia volutpat. Cras luctus pretium sollicitudin. Suspendisse scelerisque mi ac turpis lobortis, sed fringilla est egestas. Sed porttitor venenatis dui, vitae interdum est convallis quis.</p>
            <h3>Jesteśmy fajną firmą <span className="blue">wartą zaufania</span></h3>
            <button className="messengerBtn">
                <a href="https://m.me/lukasburski" target="_blank">
                    <img src={require("../../static/img/messenger.png")} alt="messenger" />
                    <h3>Napisz na prywatnego messengera</h3>
                </a>
            </button>*/}
            <div className="socialMedia facebook">
                <h4>Znajdziesz nas na facebooku</h4>
                <a href="https://www.facebook.com/burskisprzatanie" target="_blank" rel="noreferrer">
                    <img className="sm" src={require("../../static/img/facebook.png")} alt="facebook"/>
                </a>
            </div>
            {/*<div className="socialMedia instagram">
                <h4>Obserwuj nas na instagramie</h4>
                <img className="sm" src={require("../../static/img/instagram.png")} alt="instagram" />
            </div>*/}
            <div className="socialMedia fixly">
                <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank" rel="noreferrer">
                    <img alt="Polecają mnie na Fixly"
                         src="https://fixly.pl/profil/mAYK1kwm/widget-a01.png" />
                </a>
            </div>
        </div>
    </section>);
};

export default ONas;
