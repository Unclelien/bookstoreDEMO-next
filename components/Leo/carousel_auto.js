import React, { useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import css from '@/components/Leo/carousel.module.css'

export default function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const handleActiveIndexChange = (index) => {
    // console.log(index)
    setActiveSlideIndex(index.realIndex)
  }
  return (
    <>
      <div className={css.hidden}>
        <div
          className="d-flex justify-content-center  align-items-center "
          style={{
            backgroundColor: '#ffffff',
            height: '500px',
            width: '150%',
            transform: 'translateX(-16%)',
          }}
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            onActiveIndexChange={handleActiveIndexChange}
          >
            <SwiperSlide>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner1.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 0 ? css.active : css.no_active}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner2.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 1 ? css.active : css.no_active}
              >
                .
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner3.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 2 ? css.active : css.no_active}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner4.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 3 ? css.active : css.no_active}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner5.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 4 ? css.active : css.no_active}
              ></div>
            </SwiperSlide>
            <SwiperSlide>
              {' '}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner6.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 5 ? css.active : css.no_active}
              ></div>
            </SwiperSlide>
            {/* <SwiperSlide>
              {' '}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  borderRadius: '15px',
                  backgroundImage: `url('/used-img/banner6.jpg')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={activeSlideIndex === 6 ? css.active : css.no_active}
              ></div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  )
}
