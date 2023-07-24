import { Inter } from 'next/font/google'
import ContainerBlock from '@/components/ContainerBlock'
import ScreenComponent from '@/components/landing/ScreenLanding'
import GridCard from '@/components/landing/GridCart'
import SliderCard from '@/components/landing/Slider'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock>
      <ScreenComponent/>
      <GridCard/>
      <SliderCard/>
      <Footer/>
    </ContainerBlock>
  )
}
