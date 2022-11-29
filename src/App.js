import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./App.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
  ]
  return (
    <div className="image-container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: 35,
          depth: 250,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        loop={true}
      >
        {
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt="NFT" />
              <p>166 mammals have been photographed and immortalized in the Photo Ark digital collectibles collection. From the Grey Forest Wallaby (Dorcopsis Luctuosa) to the Asian Elephant (Elephas Maximus), which will you reveal?"</p>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
}
