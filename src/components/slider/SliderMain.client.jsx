import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export function SliderMain({arrayDesk, arrayMobile}) {
    let listItems;

    if(arrayDesk.length == arrayMobile.length){
        listItems = arrayDesk.map((banner, i) =>  {
          return (
            <SwiperSlide key={i}>
              <img className="banner-desk" src={banner} />
              <img className="banner-mobile" src={arrayMobile[i]}/>
            </SwiperSlide>
          );
      
        });
    }

    return (

        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            {listItems}
        </Swiper>

    )
}