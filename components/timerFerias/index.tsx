"use client"

import { useEffect, useState } from "react"

interface ITimerFerias {
    dias: string | number,
    horas: string | number,
    minutos: string | number,
    segundos: string | number
}

function Index() {
    const [time, setTime] = useState<ITimerFerias>({ dias: 0, horas: 0, minutos: 0, segundos: 0 })
    const [ferias, setFerias] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            const deadline = new Date('jun 02, 2023 17:59:00').getTime()
            const now = new Date().getTime()
            const t = deadline - now
            const days = Math.floor(t / (1000 * 60 * 60 * 24))
            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((t % (1000 * 60)) / 1000)
            setTime({ dias: days < 10 ? 0 + days : days, horas: hours < 10 ? '0' + hours : hours, minutos: minutes < 10 ? '0' + minutes : minutes, segundos: seconds < 10 ? '0' + seconds : seconds })
            if (t < 0) {
                setFerias(false)
                clearInterval(interval)
            }
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    if (!ferias) {
        return (
            <div className='m-auto w-11/12 md:w-9/12 translate-y-40 md:translate-y-32 lg:translate-y-32 xl:translate-y-52'>
                <p className='text-center text-2xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold mb-2 xl:mb-4 drop-shadow-lg'>Faltam</p>
                <p className='text-center text-4xl md:text-6xl lg:text-7xl xl:text-9xl text-white font-semibold font-mono mb-2 xl:mb-4 drop-shadow-lg'>{time.dias}d {time.horas}h {time.minutos}m {time.segundos}s</p>
                <p className='text-center text-2xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold mb-2 xl:mb-4 drop-shadow-lg'>para as FÉRIAS!</p>
            </div>
        )
    } else {
        return (
            <div className='m-auto w-11/12 md:w-9/12 translate-y-40 md:translate-y-32 lg:translate-y-32 xl:translate-y-44'>
                <p className='text-center text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-white font-semibold mb-2 xl:mb-4 drop-shadow-lg'>Modo Férias</p>
                <p className='text-center text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-semibold font-mono mb-2 xl:mb-4 drop-shadow-lg'>ativado com sucesso!</p>
            </div>
        )

    }
}

export default Index