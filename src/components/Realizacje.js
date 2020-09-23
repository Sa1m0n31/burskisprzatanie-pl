import React, { useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import SwiperCore, {Pagination, Scrollbar} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

const Realizacje = () => {
    SwiperCore.use([Pagination]);

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
            <div className="image desktopOnly">
                <img src={require("../../static/img/left.png")} alt="lewo" onClick={() => moveSlider(false)} />
                <Img fluid={kolejka[image].childImageSharp.fluid} alt="Realizacje1" />
                <img src={require("../../static/img/right.png")} alt="prawo" onClick={() => moveSlider(true)} />
            </div>
            <div className="mobileOnly">
                <Swiper
                    loop={true}
                    pagination={{ clickable: true }}
                >
                    <SwiperSlide>
                        <Img fluid={kolejka[0].childImageSharp.fluid} alt="Realizacje1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img fluid={kolejka[1].childImageSharp.fluid} alt="Realizacje2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img fluid={kolejka[2].childImageSharp.fluid} alt="Realizacje3" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>);
};

export default Realizacje;
