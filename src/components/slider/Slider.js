import { React } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import './Slider.css'

const Slider =  ({setSwiper, data, type, time}) => {
        
        return (
          <div>
          <Swiper className='swiper-cont' spaceBetween={10} pagination={{ clickable: true }} navigation scrollbar={{ draggable: true }} grabCursor={true}
                slidesPerView={2}
                onSwiper={(swiper) => setSwiper(swiper)} >
                {(type=="comp"||type=="work") && Object.values(data).map((value,i)=>(<SwiperSlide>
                        <a href={`/contest/${time}/${type}/${i}`}>
                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                        <div className="placeholder-title">{value}</div>
                        </a>
                                        </SwiperSlide>)
                                        
                                )}
                                {(type=="talk"||type=="proshow") && Object.values(data).map((value,i)=>(<SwiperSlide>
                                                <a href={`/gallery/${type}/${i}`}>
                                                        <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                                        <div className="placeholder-title">{value}</div>
                                                </a>
                                        </SwiperSlide>)
                                        
                                )}
                </Swiper>
                </div>
        );
};

export default Slider;