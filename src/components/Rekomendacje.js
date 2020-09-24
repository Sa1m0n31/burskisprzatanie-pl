import React, { useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/swiper.scss';

import TinderCard from 'react-tinder-card';

import Loader from 'react-loader-spinner';

const Rekomendacje = () => {
    SwiperCore.use([Pagination]);

    const [empty, setEmpty] = useState(false);

    const data = useStaticQuery(graphql`
        query RekomendacjeQuery {
    rekomendacje2: file(relativePath: { eq: "rekomendacje2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 280, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje3: file(relativePath: { eq: "rekomendacje3.png" }) {
        childImageSharp {
            fluid(maxWidth: 280, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje4: file(relativePath: { eq: "rekomendacje4.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 280, maxHeight: 160) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly: file(relativePath: { eq: "fixly.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly1: file(relativePath: { eq: "fixly1.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    fixly2: file(relativePath: { eq: "fixly2.png" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    
    }
    `);

    const kolejka = [
        data.rekomendacje2,
        data.rekomendacje3,
        data.rekomendacje4
    ];

    const cardLeftScreen = () => {
        if(typeof document !== 'undefined') {
            let els = document.getElementsByClassName("swipe");
            for(let i=0; i<els.length; i++) {
                els[i].style.transition = "none";
                els[i].style.transform = "none";
                els[i].style.display = "block";
            }
        }
    };

    return (<section className="rekomendacje">
        <h2>Rekomendacje</h2>
        <div className="rekomendacjeWindow desktopOnly">
            <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                <Img fluid={data.rekomendacje2.childImageSharp.fluid} alt="rekomendacje2" />
            </a>
            <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                <Img fluid={data.rekomendacje3.childImageSharp.fluid} alt="rekomendacje3" />
            </a>
            <a href="https://fixly.pl/profil/mAYK1kwm" target="_blank">
                <Img fluid={data.rekomendacje4.childImageSharp.fluid} alt="rekomendacje4" />
            </a>
        </div>

        <div className="mobileOnly swiper">
            <div className='cardContainer'>
                {kolejka.map((character, index) =>
                    <TinderCard className='swipe' key={1} onCardLeftScreen={() => cardLeftScreen()}>
                        <div className='card'>
                            <Img fluid={character.childImageSharp.fluid} alt="rekomendacje1" />
                        </div>
                    </TinderCard>
                )}
            </div>
        </div>
    </section>);
};

export default Rekomendacje;
