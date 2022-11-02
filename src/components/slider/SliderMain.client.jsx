
import { Lazy, Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';


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
            modules={[Lazy, Autoplay, Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={true}
            autoplay={true}
            lazy={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            {listItems}
        </Swiper>

    )
}