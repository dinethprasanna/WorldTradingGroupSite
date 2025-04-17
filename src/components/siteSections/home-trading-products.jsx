import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import { EffectCoverflow, Navigation } from "swiper/modules";

function HomeTradingProducts() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]); // Runs when swiperInstance is set

  return (
    <section className="trading-products-slider px-5 lg:px-4 mx-auto pt-10 pb-10 md:pt-13 md:pb-13 lg:pt-15 lg:pb-15 max-w-7xl">
      <h2 className="text-white text-center mb-8 font-bold md:mb-10 text-[38px] md:text-[42px] lg:text-5xl">
      Market Assets Tailored for You
      </h2>
      <div className="trad-prds-slider-wrapper relative">
        <Swiper
          className="w-4/5 mx-auto relative"
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 205,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            768: { slidesPerView: 1 },
            980: { slidesPerView: 2 },
          }}
          modules={[EffectCoverflow, Navigation]}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          <Swiper>
            <SwiperSlide className="py-7 px-6 bg-[#CCEDF9] rounded-3xl">
              <div className="prd-card flex flex-col gap-4 items-center">
                <h4 className="text-(--yellow-text) font-bold text-center text-2xl md:text-[32px] mb-2 lg:mb-6">Market Benchmarks</h4>
                <img
                src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/sample-prd-icon.png"
                alt="Indices" width="134px" height="auto"
              />
              <p className="text-(--dark-green) text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-7 px-6 bg-[#CCEDF9] rounded-3xl">
            <div className="prd-card flex flex-col gap-4 items-center">
                <h4 className="text-(--yellow-text) font-bold text-center text-2xl md:text-[32px] mb-2 lg:mb-6">Digital Coins</h4>
                <img
                src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/sample-prd-icon.png"
                alt="Crypto" width="134px" height="auto"
              />
              <p className="text-(--dark-green) text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-7 px-6 bg-[#CCEDF9] rounded-3xl">
            <div className="prd-card flex flex-col gap-4 items-center">
                <h4 className="text-(--yellow-text) font-bold text-center text-2xl md:text-[32px] mb-2 lg:mb-6">Equities and Securities</h4>
                <img
                src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/sample-prd-icon.png"
                alt="Stock and Shares" width="134px" height="auto"
              />
              <p className="text-(--dark-green) text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="py-7 px-6 bg-[#CCEDF9] rounded-3xl">
            <div className="prd-card flex flex-col gap-4 items-center">
                <h4 className="text-(--yellow-text) font-bold text-center text-2xl md:text-[32px] mb-2 lg:mb-6">Raw Materials</h4>
                <img
                src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/sample-prd-icon.png"
                alt="Commodity" width="134px" height="auto"
              />
              <p className="text-(--dark-green) text-center text-sm md:text-base">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </Swiper>
        <div className="swiper-nav absolute left-0 right-0 top-[50%]">
          <button ref={navigationPrevRef} className="prev cursor-pointer hover:grayscale absolute left-0 md:left-4 w-[26px] md:w-[48px]">
            <img src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/trading-prd-slider-left-arrow.png" alt="prev-arrow" />
          </button>
          <button ref={navigationNextRef} className="next cursor-pointer hover:grayscale absolute right-0 md:right-4 w-[26px] md:w-[48px]">
          <img src="SiteAssests/HomePage/tading-prds-for-you-slider-icons/trading-prd-slider-right-arrow.png" alt="next-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomeTradingProducts;
