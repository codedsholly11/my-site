import React from 'react'
import '../Homepage/hero.css'
import Image from 'next/image'
import { FaProductHunt } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { MdOutlineNightlight } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <div>
      <div class="hero2">
       <div>
       <p className='hero-text text-5xl text-white'> A Web Developer on an epic journey to conquer the digital universe
        </p>
        <button className='bg-gray-600 text-black p-[10px] border-[1px] border-[#9e69ffcc] rounded-full w-[15vw] relative bottom-[20px] '>Work with me</button>
       </div>
        <section class="navigate">
            <div class="about">
            <SlPeople className='mr-10 scale-[2] text-white'/>
            <p className='text-white font-bold text-2xl'>About</p>
        </div>
        <div class="about">
            <FaProductHunt className='mr-10 scale-[2] text-white'/>
            <p className='text-white font-bold text-2xl'>Projects</p>
        </div>
        <div class="about">
            <IoShareSocialOutline  className='mr-10 scale-[2] text-white'/>
            <p className='text-white font-bold text-2xl'>Socials</p>
        </div>
        <div class="about">
            < GrContact className='mr-10 scale-[2] text-white'/>
            <p className='text-white font-bold text-2xl'>Contact</p>
        </div>
        <div class="about">
            <MdOutlineNightlight  className='mr-10 scale-[2] text-white'/>
            <p className='text-white font-bold text-2xl'>Light</p>
        </div>
        </section>
      </div>
     
    </div>
  )
}

export default Hero
