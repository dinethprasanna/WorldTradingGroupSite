import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";

function LogoSlider() {
  return (
    <section className="logo-slider px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <div className="logo-slider-wrapper js-enable-logo-slider bg-[#2D565C] rounded-xl py-2">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          spaceBetween={20}
          speed={5000}
          autoplay={{ delay: 10, disableOnInteraction: false, enabled: true }}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 26,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 32,
              },
          }}
        >
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img-card">
              <img
                src="/SiteAssests/GlobalElement/LogoSlider/logo-slider-sample-icon.png"
                alt="sample"
                width="64px"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default LogoSlider;
