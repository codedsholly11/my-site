import React from 'react'
import Image from 'next/image'
import '../Homepage/hero.css'

const About = () => {
  return (
    <div className=' flex flex-col px-[50px] items-center justify-center gap-[50px] bg-black'>
      <h1 className='text-2xl font-bold'>ABOUT ME</h1>
      <div className='flex  justify-center gap-[50px]'>
        <div className='prof rounded-[100%] overflow-hidden h-[400px] w-[400px] border-[2px] border-[white]'>
            <Image className='w-full h-full ' src="/img/oluomo.png" alt="image" width={500} height={500}/>
        </div>
        <div className='aboutme w-[40vw] bg-gray-800 text-white border-2 rounded-xl p-[40px] h-[40vh]'>
            <p>"Hello, I'm Gaspare, a web developer specializing <br />in HTML, CSS, JavaScript, React, Firebase, and more.

                I'm passionate about crafting exceptional digital experiences.

                Let's collaborate and bring your digital vision to life!"</p>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default About

