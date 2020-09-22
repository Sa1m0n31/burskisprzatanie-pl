import React, { useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

const Realizacje = () => {

    const data = useStaticQuery(graphql`
        query RealizacjeQuery {
    realizacje1: file(relativePath: { eq: "realizacje1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
     realizacje2: file(relativePath: { eq: "realizacje2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }
     realizacje3: file(relativePath: { eq: "realizacje3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 2560, maxHeight: 1800) {
                ...GatsbyImageSharpFluid
            }
        }
    }}
    `);

    let [ image, setImage ] = useState(0);

    let kolejka = [
        data.realizacje1,
        data.realizacje2,
        data.realizacje3
    ];

    let moveSlider = (right) => {
        if(right) {
            if(image < 2) {
                setImage(image+1);
            }
            else {
                setImage(0);
            }
        }
        else {
            if(image === 0) {
                setImage(2);
            }
            else {
                setImage(image-1);
            }
        }
    };

    return (<section className="realizacje">
        <h2>Nasze realizacje</h2>
        <div className="realizacjeInner">
            <div className="image">
                <img src={require("../../static/img/left.png")} alt="lewo" onClick={() => moveSlider(false)} />
                <Img fluid={kolejka[image].childImageSharp.fluid} alt="Realizacje1" />
                <img src={require("../../static/img/right.png")} alt="prawo" onClick={() => moveSlider(true)} />
            </div>
        </div>
    </section>);
};

export default Realizacje;
