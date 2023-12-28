import Image from 'next/image'
import styles from './page.module.css'
import ImageBanner from './components/ImageBanner'
import VideoSection from './components/VideoSection'
import BrideGrid from './components/BrideGrid'

export default function Home() {
  return (
   <main>
    <ImageBanner/>

    <BrideGrid/>
    <VideoSection/>
   </main>
  )
}
