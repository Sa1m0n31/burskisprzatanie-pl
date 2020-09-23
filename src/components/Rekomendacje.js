import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

const Rekomendacje = () => {
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
                 data-show-text="true" data-width={350}>
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
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                         data-show-text="true" data-width={350}>
                        <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                                    className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                            rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                            przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                                href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                                2020</a></blockquote>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                         data-show-text="true" data-width={350}>
                        <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                                    className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                            rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                            przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                                href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                                2020</a></blockquote>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="fb-post" data-href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                         data-show-text="true" data-width={350}>
                        <blockquote cite="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942"
                                    className="fb-xfbml-parse-ignore"><p>Wykonanie usługi - perfekcyjnie, czas pracy -
                            rewelacja, ceny - bardzo dobre, odwzorowują nakład pracy i zaangażowania....</p>Opublikowany
                            przez <a href="#" role="button">Danielę Chojnacką</a>&nbsp;<a
                                href="https://www.facebook.com/daniela.chojnacka.568/posts/168301751426942">Sobota, 1 sierpnia
                                2020</a></blockquote>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    4
                </SwiperSlide>
            </Swiper>
        </div>
    </section>);
};

export default Rekomendacje;
