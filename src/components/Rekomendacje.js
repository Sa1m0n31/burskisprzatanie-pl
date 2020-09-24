import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

import TinderCard from 'react-tinder-card';

const Rekomendacje = () => {
    SwiperCore.use([Pagination]);

    const data = useStaticQuery(graphql`
        query RekomendacjeQuery {
    rekomendacje1: file(relativePath: { eq: "rekomendacje1.png" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 148) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje2: file(relativePath: { eq: "rekomendacje1.png" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje3: file(relativePath: { eq: "rekomendacje3.png" }) {
        childImageSharp {
            fluid(maxWidth: 350, maxHeight: 159) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje4: file(relativePath: { eq: "rekomendacje4.png" }) {
        childImageSharp {
            fluid(maxWidth: 350, maxHeight: 150) {
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

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    };

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    };

    return (<section className="rekomendacje">
        <h2>Rekomendacje</h2>
        <div className="rekomendacjeWindow desktopOnly">
            <Img fluid={data.rekomendacje1.childImageSharp.fluid} alt="rekomendacje1" />
            <Img fluid={data.rekomendacje2.childImageSharp.fluid} alt="rekomendacje2" />
            <Img fluid={data.rekomendacje3.childImageSharp.fluid} alt="rekomendacje3" />
            <Img fluid={data.rekomendacje4.childImageSharp.fluid} alt="rekomendacje4" />
        </div>

        <div className="mobileOnly swiper">
            {/*<Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <Img fluid={data.rekomendacje1.childImageSharp.fluid} alt="rekomendacje1" />
                </SwiperSlide>
                <SwiperSlide>
                    <Img fluid={data.rekomendacje2.childImageSharp.fluid} alt="rekomendacje2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Img fluid={data.rekomendacje3.childImageSharp.fluid} alt="rekomendacje3" />
                </SwiperSlide>
                <SwiperSlide>
                    <Img fluid={data.rekomendacje4.childImageSharp.fluid} alt="rekomendacje4" />
                </SwiperSlide>
            </Swiper>*/}

            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, World!</TinderCard>
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, 1!</TinderCard>
            <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>Hello, 2!</TinderCard>
        </div>
    </section>);
};

export default Rekomendacje;
