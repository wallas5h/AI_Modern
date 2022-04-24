import * as React from 'react';
import { Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { atlassian, dropbox, google, shopify, slack } from './imports';
import './_brand.scss';





export const Brand = () => {
  return (
    <div className="gpt3__brand section__padding" >
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500
        }}
        breakpoints={{
          450: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >

        <SwiperSlide>
          <img src={google} alt="google" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slack} alt="slack" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={atlassian} alt="atlassian" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={dropbox} alt="dropbox" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={shopify} alt="shopify" />
        </SwiperSlide>





      </Swiper>





    </div >
  )
}