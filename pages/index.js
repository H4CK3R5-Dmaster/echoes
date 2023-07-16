import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Text } from '@chakra-ui/react'
import ContainerBlock from '@/components/ContainerBlock'
import ScreenComponent from '@/components/landing/ScreenLanding'
import GridCard from '@/components/landing/GridCart'
import SliderCard from '@/components/landing/Slider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock>
      <ScreenComponent/>
      <GridCard/>
      <SliderCard/>
    </ContainerBlock>
  )
}
