import Image from 'next/image'
import styles from './page.module.css'
import ImageBanner from './components/ImageBanner'
import VideoSection from './components/VideoSection'
import BrideGrid from './components/BrideGrid'
import StickySection from './components/StickySection'
import FlipBook from './components/FlipBook'
import SliderCards from './components/SliderCards'
import SliderSection from './components/SliderSection'
import ImageCarousel from './components/ImageCarousel'

export default function Home() {
  return (
   <main>
    <ImageBanner/>
    <ImageCarousel/>
    {/* <SliderSection/> */}
    <BrideGrid/>
    <VideoSection/>

    <SliderCards/>

    {/* <FlipBook/> */}

    {/* <StickySection/> */}
   </main>
  )
}
