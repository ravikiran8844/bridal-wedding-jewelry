import Image from 'next/image'
import React from 'react'

const ImageBanner = () => {
  return (
    <div className='main-image-banner'>
         <picture>
                <source
                    srcSet="/home-main-banner1.webp"
                    type="image/webp"
                    media="(min-width: 650px)"
                />
                <Image
                    priority="true"
                    alt="main banner"
                    src="/home-mobile-banner1.webp"
                    height={600}
                    width={800}
                    className='img-fluid w-100'
                               />
                </picture>
    </div>
  )
}

export default ImageBanner