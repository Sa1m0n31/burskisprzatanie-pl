import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Realizacje = () => {
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
                >
                    <SwiperSlide>
                        <Img fluid={data.realizacje2.childImageSharp.fluid} alt="Realizacje1" />
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
            </div>
        </div>
    </section>);
};

export default Realizacje;
