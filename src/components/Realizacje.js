import React, { useState } from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import 'swiper/swiper.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade} from 'swiper';

import 'swiper/components/effect-fade/effect-fade.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Realizacje = () => {
    SwiperCore.use([EffectFade]);
    const data = useStaticQuery(graphql`
        query RealizacjeQuery {
    realizacje1: file(relativePath: { eq: "realizacje1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 400) {
                ...GatsbyImageSharpFluid
            }
        }
    }
     realizacje2: file(relativePath: { eq: "realizacje2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 500, maxHeight: 670) {
                ...GatsbyImageSharpFluid
            }
        }
    }
     realizacje3: file(relativePath: { eq: "realizacje3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 500, maxHeight: 670) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    realizacje4: file(relativePath: { eq: "realizacje4.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 500, maxHeight: 670) {
                ...GatsbyImageSharpFluid
            }
        }
    }
     realizacje5: file(relativePath: { eq: "realizacje5.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 500, maxHeight: 670) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    }
    `);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const [slide, setSlide] = useState(0);

    const changeSlide = (swiper) => {
        let index = swiper.activeIndex;
        if(typeof document !== 'undefined') {
            let els = document.querySelectorAll("div.mobileOnly > div:nth-child(2) > div");
            for(let i=0; i<els.length; i++) {
                els[i].style.backgroundColor="#75C3DE";
            }
            if((index === 1)||(index === 5)) {
                document.querySelector("div.mobileOnly > div:nth-child(2) > div:nth-child(1)").style.backgroundColor="#4BAF4F";
            }
            else if(index === 2) {
                document.querySelector("div.mobileOnly > div:nth-child(2) > div:nth-child(2)").style.backgroundColor="#4BAF4F";
            }
            else if(index === 3) {
                document.querySelector("div.mobileOnly > div:nth-child(2) > div:nth-child(3)").style.backgroundColor="#4BAF4F";
            }
            else {
                document.querySelector("div.mobileOnly > div:nth-child(2) > div:nth-child(4)").style.backgroundColor="#4BAF4F";
            }
        }
    };

    return (<section className="realizacje">
        <h2>Nasze realizacje</h2>
        <div className="realizacjeInner">
            <div className="image desktopOnly">
                <div className="container">
                    <Carousel responsive={responsive} infinite={true}>
                        <div>
                            <Img fluid={data.realizacje2.childImageSharp.fluid} alt="Realizacje1" />
                        </div>
                        <div>
                            <Img fluid={data.realizacje3.childImageSharp.fluid} alt="Realizacje1" />
                        </div>
                        <div>
                            <Img fluid={data.realizacje4.childImageSharp.fluid} alt="Realizacje1" />
                        </div>
                        <div>
                            <Img fluid={data.realizacje5.childImageSharp.fluid} alt="Realizacje1" />
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className="mobileOnly">
                <Swiper
                    loop={true}
                    effect="fade"
                    onSlideChange={(swiper) => changeSlide(swiper)}
                >
                    <SwiperSlide>
                        <Img fluid={data.realizacje2.childImageSharp.fluid} alt="Realizacje1"  />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img fluid={data.realizacje3.childImageSharp.fluid} alt="Realizacje2" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img fluid={data.realizacje5.childImageSharp.fluid} alt="Realizacje3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Img fluid={data.realizacje4.childImageSharp.fluid} alt="Realizacje4" />
                    </SwiperSlide>
                </Swiper>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div style={{width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#75C3DE", margin: "0 5px"}}/>
                    <div style={{width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#75C3DE", margin: "0 5px"}}/>
                    <div style={{width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#75C3DE", margin: "0 5px"}}/>
                    <div style={{width: "15px", height: "15px", borderRadius: "50%", backgroundColor: "#75C3DE", margin: "0 5px"}}/>
                </div>
            </div>
        </div>
    </section>);
};

export default Realizacje;
