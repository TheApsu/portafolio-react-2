import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';
import './Projects.css';
import { useState } from 'react';
import { ParsedSite } from '../../types';

type ProjectsProps = {
  parsedSites: ParsedSite[];
};

export default function Projects({ parsedSites }: ProjectsProps) {
  const [activePage, setActivePage] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();
  const [swiperProject, setSwiperProject] = useState<SwiperClass>();

  const handleSlideChange = (pSwiper: SwiperClass) => {
    setActivePage(pSwiper.activeIndex);
    if (swiper) {
      swiper.slideTo(pSwiper.activeIndex);
    }
  };

  const handleSwipeClick = (pIndex: number) => {
    if (swiperProject && swiper) {
      swiperProject.slideTo(pIndex);
      swiper.slideTo(pIndex);
    }
  };

  return (
    <>
      <div>
        <p className='text-3xl text-center text-white mb-4'>
          <strong className='text-secondaryText text-4xl'>
            {parsedSites.length}
          </strong>{' '}
          <span>Proyectos</span>
        </p>
      </div>
      {parsedSites.length && (
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='mySwiper'
          onSlideChange={(pSwiper) => handleSlideChange(pSwiper)}
          onSwiper={(pSwiper) => setSwiperProject(pSwiper)}
        >
          {parsedSites.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='container-card flex flex-col'>
                <div className='card'>
                  <img src={item.logo} alt={item.name} />
                </div>
                <a
                  className='bg-secondary gap-2 flex justify-center items-center w-full text-center text-xl p-3 text-white font-bold uppercase'
                  href={item.url}
                  target='_blank'
                >
                  Ver sitio
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='w-5 h-5 mb-1'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25'
                    />
                  </svg>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className='paginator'>
        <Swiper
          breakpoints={{
            1200: {
              slidesPerView: 8,
            },
            1024: {
              slidesPerView: 5.5,
            },
            768: {
              slidesPerView: 8,
            },
            460: {
              slidesPerView: 5.5,
            },
            240: {
              slidesPerView: 4.5,
            },
          }}
          spaceBetween={0}
          centeredSlides={true}
          onSwiper={(pSwiper) => setSwiper(pSwiper)}
          allowTouchMove={false}
        >
          {parsedSites.map((_, index) => (
            <SwiperSlide key={index} onClick={() => handleSwipeClick(index)}>
              <div
                className={`control-paginator ${
                  activePage === index && 'active'
                }`}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
