"use client"
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/css/scrollbar';


const Slide = () => {
    
  return (
    <div className='flex flex-col py-[20px] px-[40px]  '>
      <div className='text-4xl font-bold items-center justify-center flex py-[30px] w-[100%]'>
        <h1>My Tech-Skills</h1>
      </div>

      <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
     
    >
      <SwiperSlide><Image src="/git.png" alt="" width={200} height={60} /></SwiperSlide>
      <SwiperSlide><Image src="/css-logo.png" alt=" image" width={200} height={80} /></SwiperSlide>
      <SwiperSlide><Image src="/html.png" alt=""  width={300} height={130}/></SwiperSlide>
      <SwiperSlide><Image src="/github-log.png" alt="" width={200} height={80} /></SwiperSlide>
      <SwiperSlide><Image src="/java.png" alt="" width={200} height={80} /></SwiperSlide>
      <SwiperSlide><Image src="/react-log.png" alt="" width={200} height={80} /></SwiperSlide>
      <SwiperSlide><Image src="/nex-log.png" alt="" width={200} height={80} /></SwiperSlide>
      <SwiperSlide><Image src="/fire-lo.png" alt="" width={200} height={80} /></SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
    </Swiper>
      </div>

     </div>
    
  )
}

export default Slide
