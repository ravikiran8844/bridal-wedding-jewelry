import Image from 'next/image'
import styles from './page.module.css'
import ImageBanner from './components/ImageBanner'
import VideoSection from './components/VideoSection'
import BrideGrid from './components/BrideGrid'
import StickySection from './components/StickySection'
import FlipBook from './components/FlipBook'

export default function Home() {
  return (
   <main>
    <ImageBanner/>
    <BrideGrid/>
    <FlipBook/>
    <VideoSection/>

    <StickySection/>
   </main>
  )
}
