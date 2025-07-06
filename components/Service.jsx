import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Service = () => {
  return (
    <motion.div
     initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
     id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
       initial={{y: -20, opacity: 0}}
       whileInView={{y:0, opacity: 1}}
       transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg'>What I Offer
      </motion.h4>

      <motion.h2 
       initial={{y: -20, opacity: 0}}
        whileInView={{y:0, opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl'>My Services
      </motion.h2>

      <motion.p 
       initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'> Hello Everyone, It's Enzo here. I am an Experienced Frontend Developer with professional expertise in the field. I am a passionate and dedicated person always driven for sucess and breakthrough. I'm an excellence Team player and I'll bring quality to your team.

      </motion.p>


      <motion.div 
       initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.9}}
      className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 my-10 '>
        {serviceData.map(({icon, title, description, link}, index) => (

            <motion.div 
           whileHover={{scale: 1.05}}

            key={index} className='border border-gray-600 rounded-lg px-8 py-12 hover:bg-rose-200 hover:translate-y-1 duration-800 hover:shadow-[4px_4px_0_black]'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                <p className='text-sm text-gray-500 leading-5'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read More <Image src={assets.right_arrow} alt='' className='w-4'/>
                </a>

            </motion.div>
        ))}

      </motion.div>

    </motion.div>
  )
}

export default Service
