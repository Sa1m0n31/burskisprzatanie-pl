import React from "react";

import { graphql, useStaticQuery } from "gatsby";
import Img from 'gatsby-image';

// Import Swiper React components
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Rekomendacje = () => {
    SwiperCore.use([Pagination]);

    const data = useStaticQuery(graphql`
        query RekomendacjeQuery {
    rekomendacje1: file(relativePath: { eq: "rekomendacje1.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje2: file(relativePath: { eq: "rekomendacje2.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje3: file(relativePath: { eq: "rekomendacje3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
                ...GatsbyImageSharpFluid
            }
        }
    }
    rekomendacje4: file(relativePath: { eq: "rekomendacje3.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000) {
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

    return (<section className="rekomendacje">
        <h2>Rekomendacje</h2>
        <div className="rekomendacjeWindow desktopOnly">
            <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                 data-show-text="true" data-width={350}>
                <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                            className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                    rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                    przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                        href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                        2020</a></blockquote>
            </div>
            <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                 data-show-text="true" data-width={350}>
                <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                            className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                    rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                    przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                        href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                        2020</a></blockquote>
            </div>
            <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                 data-show-text="true" data-width="auto">
                <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                            className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                    rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                    przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                        href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                        2020</a></blockquote>
            </div>

            <div>
                <img src={require("../../static/img/fixly.png")} alt="fixly" />
            </div>
        </div>

        <div className="mobileOnly swiper">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <img className="firstImg" src={require("../../static/img/fixly1.png")} alt="fixly1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="secondImg" src={require("../../static/img/fixly2.png")} alt="fixly2" />
                </SwiperSlide>
                <SwiperSlide>
                    <Img fluid={data.rekomendacje3.childImageSharp.fluid} alt="rekomendacje3" />
                </SwiperSlide>
                <SwiperSlide>
                    <Img fluid={data.rekomendacje4.childImageSharp.fluid} alt="rekomendacje4" />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>);
};

export default Rekomendacje;
