"use client"

import Image from 'next/image';
import React from 'react'
import HTMLFlipBook from "react-pageflip";

const FlipBook = () => {
  return (
   <section className='flip-book-section'>
    <div className='container py-5'>
        <div className='col-12 text-center mb-5'>
            <div className='fs-1 fw-bold font-secondary primary-text'>Explore the Collection</div>
            <Image width={250} height={14} className='img-fluid' src="/heading_design_0207.png" alt="heading underline img" />

        </div>
        <div className='col-12'>
        <HTMLFlipBook
            width={550}
            height={550}
            size="fixed"
            minWidth={315}
            maxWidth={800}
            minHeight={400}
            maxHeight={650}
            maxShadowOpacity={0.5}
            showCover={false}
            mobileScrollSupport={true}  
            className="demo-book bg-white m-auto"
           
          >
             <div className="page bg-primary" data-density="hard">
                <div className="page-content">
                <div>page 0</div>
                </div>
            </div>

            <div className="page bg-secondary ">Page 1</div>
            <div className="page bg-warning ">Page 2</div>
            <div className="page bg-danger">Page 3</div>
            <div className="page bg-dark">Page 4</div>
            <div className="page bg-success">Page 5</div>
            <div className="page bg-warning ">Page 6</div>


          </HTMLFlipBook>
        </div>
    </div>
   </section>
  )
}

export default FlipBook