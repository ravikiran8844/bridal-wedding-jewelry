"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class SliderCards extends Component {
    render() {
        var settings = {
            arrows:false,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 360,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <section className="slick-cards-section pb-5">
                <div className="container py-5">
                    <div className='col-12 text-center mb-5'>
                        <div className='fs-1 primary-text fw-bold slick-cards-section_title'>Newest Wedding Collection Range from the House of Jewel One</div>
                    </div>        
                    <Slider {...settings}>
                        <div>
                            <Image src="/slider-1.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/slider-2.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/slider-3.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/slider-4.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/slider-5.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/slider-6.webp" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                       
                    </Slider>
                </div>
            </section>
        );
    }
}
