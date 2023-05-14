"use client"
import '@/app/globals.css'
import Image from 'next/image'
import React, { useState } from 'react'

function Index({ children }: { children: React.ReactNode }) {
    const [background, setBackground] = useState('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80')

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