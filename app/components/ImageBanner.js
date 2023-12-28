import Image from 'next/image'
import React from 'react'

const ImageBanner = () => {
  return (
    <div>
        <Image className='img-fluid w-100' src="/v-banner1.webp" width={1920} height={700} alt="main banner" />
    </div>
  )
}

export default ImageBanner