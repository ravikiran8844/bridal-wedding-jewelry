import Image from 'next/image'
import React from 'react'

const ImageBanner = () => {
  return (
    <div>
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
                    height={512}
                    width={1437}
                    className='img-fluid w-100'
                               />
                </picture>
    </div>
  )
}

export default ImageBanner