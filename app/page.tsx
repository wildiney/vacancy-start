import Image from 'next/image'
import { useEffect, useState } from 'react'
import TimerFerias from '@/components/timerFerias/'
import Background from '@/components/background/'

export default function Home() {
  return (
    <main className='w-full'>
      <Background>
        <TimerFerias />
      </Background>
    </main >
  )
}
