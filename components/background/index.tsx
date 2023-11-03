"use client"
import '@/app/globals.css'
import Image from 'next/image'
import React, { useState } from 'react'
import { bgImage } from '@/app/constants/constants'

function Index ({ children }: { children: React.ReactNode }) {
    const [background, setBackground] = useState(bgImage)

    return (
        <>
            <div className='fixed w-full h-full'>
                <div className='maskBody w-full h-full z-10'></div>
                <Image
                    src={background}
                    alt='background'
                    fill={true}
                    priority={false}
                    style={{ position: 'absolute', objectFit: 'cover', zIndex: -1 }}
                    className='maskbody'
                />
            </div>
            {children}
        </>
    )
}

export default Index