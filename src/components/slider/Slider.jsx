import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'


const Slider =  () => {
    return (
        // <div className="sliderContainer">
            <>
            <Swiper
                spaceBetween={5}
                grabCursor={true}
                slidesPerView={2}
                >
                <SwiperSlide>

                        <img src={placeholder} alt="bruh" width="207px" height="244px" />

                </SwiperSlide>
                <SwiperSlide>

                        <img src={placeholder} alt="bruh" width="207px" height="244px" />

                </SwiperSlide>
                <SwiperSlide>

                        <img src={placeholder} alt="bruh" width="207px" height="244px" />

                </SwiperSlide>
                <SwiperSlide>

                        <img src={placeholder} alt="bruh" width="207px" height="244px" />

                </SwiperSlide>


            </Swiper>
            </>
        // </div>
    );
};
export default Slider;