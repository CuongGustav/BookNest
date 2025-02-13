import React from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import data from '../data/testimonial.json'
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"
const Testimonial = ({isBg}) => {
    const {testimonial} = data;
    return (
        <section
            id='reviews'
            className={`section-padding testimonial ${isBg === 'yes' ? 'bg-one' : ""}`}
        >
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-6 offset-xl-3 col-lg-10 offset-lg-1'>
                        <div className='section-title-center text-center'>
                            <span>{testimonial.subtitle}</span>
                            <h2 className='display-6'>{testimonial.title}</h2>
                            <div className='section-divider divider-traingle'>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row testi-row'>
                    <div className='col-12'>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{clickable: true}}
                            autoplay
                            breakpoints={{
                                768:{
                                    slidesPerView:2,
                                    spaceBetween: 20,
                                },
                                1024:{
                                    slidesPerView:3,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {testimonial.testimonialItem?.map((data, i) => (
                                <SwiperSlide key={data.id}>
                                    <div className='swiper-slide p-5px-lr'>
                                        <div className='testi-card card h-100 translateEffect1'>
                                            <div className='card-body p-4'>
                                                <div className='testi-card__quotation'>
                                                    <svg className='currentColor' fill="currentColor" strokeWidth="0" width="65" height="65" viewBox="0 0 24 24">
                                                        <path d="M9 8c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2H8c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2h1c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2Zm6 0c-1.1 0-2 .9-2 2 0 1.1.9 2 2 2h-1c-1.1 0-2 .9-2 2v2h4v-2c0-1.1-.9-2-2-2h1c1.1 0 2-.9 2-2 0-1.1-.9-2-2-2Z"/>
                                                    </svg>
                                                </div>
                                                <p className='my-4'>{data.description}</p>
                                                <div className='testi-card__user-info pt-4'>
                                                    <div className='testimonial__user-info__image'>
                                                        <img src={data.image} alt={data.title}/>
                                                    </div>
                                                    <div className='testimonial__user-info__content'>
                                                        <h4 className='mb-0'>{data.name}</h4>
                                                        <p className='mb-0'>{data.title}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Testimonial;