'use client'
import React from 'react'
import CountUp from 'react-countup'

function AnimatedCounter({amount}: {amount:number}) {
  return (
    <div className='w-full'>
        <CountUp prefix='$' duration={2.75} decimal=',' end={amount}/>
    </div>
  )
}

export default AnimatedCounter