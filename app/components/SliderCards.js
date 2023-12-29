"use client"
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

export default class SliderCards extends Component {
    render() {
        var settings = {
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
            <section className="slick-cards-section">
                <div className="container py-5">
                    <div className='col-12 text-center mb-5'>
                        <div className='fs-1 primary-text fw-bold'>A captivating wedding range from Rivaah</div>
                    </div>        
                    <Slider {...settings}>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                        <div>
                            <Image src="/product-2.jpg" width={311} height={378} className="img-fluid" alt="image" />
                        </div>
                    </Slider>
                </div>
            </section>
        );
    }
}
