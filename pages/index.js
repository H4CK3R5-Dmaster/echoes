import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Text } from '@chakra-ui/react'
import ContainerBlock from '@/components/ContainerBlock'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ContainerBlock>
      hello
    </ContainerBlock>
  )
}
