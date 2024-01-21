import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Импорт стилей навигации Swiper
import "swiper/css/pagination"; // Импорт стилей пагинации Swiper
import { Autoplay } from "swiper/modules";

import amlsafe from "../../assets/icon/amlsafe.webp";
import gateio from "../../assets/icon/gateio.webp";
import cryptopnl from "../../assets/icon/cryptopnl.webp";
import eScrooge from "../../assets/icon/e-scrooge.webp";
import kunaio from "../../assets/icon/kunaio.webp";
import crystal from "../../assets/icon/crystal.webp";
import "./SliderSwiper.scss";

console.log(Swiper);

export default function SliderSwiper() {
  return (
    <Swiper spaceBetween={30} slidesPerView={"auto"} loop={true} modules={[Autoplay]} autoplay={{ delay: 0 }} speed={6000} freeMode={true}>
      <SwiperSlide className="wrapper-slideSwiper">
        <div className="slideSwiper">
          <img src={amlsafe} alt="#" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideSwiper">
          <img src={gateio} alt="#" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideSwiper">
          <img src={cryptopnl} alt="#" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideSwiper">
          <img src={eScrooge} alt="#" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideSwiper">
          <img src={kunaio} alt="#" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slideSwiper">
          <img src={crystal} alt="#" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
