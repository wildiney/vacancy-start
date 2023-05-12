"use client"
import '@/app/globals.css'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useState } from 'react'

function Index({ children }: { children: React.ReactNode }) {
    const min = 1
    const max = 5
    const random = Math.floor(Math.random() * (max - min + min) + min)
    const [background, setBackground] = useState(`/images/background-0${random}.jpg`)

    return (
        <>
            <div className='fixed w-full h-full'>
                <div className='maskBody w-full h-full z-10'></div>
                <Image
                    src={background}
                    alt='background'
                    fill={true}
                    priority={false}
                    style={{ position: 'absolute', objectFit: 'cover', zIndex: - 1 }}
                    className='maskbody'
                />
            </div>
            {children}
        </>
    )
}

export default Index