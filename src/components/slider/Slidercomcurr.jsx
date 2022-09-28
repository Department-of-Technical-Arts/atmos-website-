import {React, useState} from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import placeholder from '../../images/competions/pawel-nolbert-62OK9xwVA0c-unsplash 1.png'
import './slider.css'

 const Slider2 =  ({swiper, setSwiper}) => {
        
        
        return (
                // <div className="sliderContainer">
                <>
                
                <Swiper
                        className='swiper-cont'
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        navigation
                        scrollbar={{ draggable: true }}
                        grabCursor={true}
                        slidesPerView={2}
                        onSwiper={(swiper) => setSwiper(swiper)}
                        >
                        
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">SPES NOVO</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Under Pressure</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">CaseSensitive</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Nuclear Blues</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">GRAND PRIX MANIA</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">ESCALADE</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">BEAM IT</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">CodeDash</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">ProdStorm</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">FASTEST FRONTEND FIRST</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">EXPERT ENCOUNTER</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Sudostar</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Techtainment</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Line Follower</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Cubing ATMOSphere</div>
                        </SwiperSlide>
                        <SwiperSlide>

                                <img src={placeholder} alt="bruh" width="207px" height="244px" />
                                <div className="placeholder-title">Wall Street Business Challenge</div>
                        </SwiperSlide>
                        
                </Swiper>

                
                
                </>
                 
        );
};

// const SwiperButtonNext = ({ children }) => {
//         const swiper = useSwiper();
//         return <button className='swiperButton' onClick={() => swiper.slideNext()}>{children}</button>;
//       };

export default Slider2;