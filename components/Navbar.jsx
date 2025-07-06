import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

  const[isScroll, setIsScroll] = useState(false)

 const sideMenuRef = useRef();

 const openMuenu = () =>{
  sideMenuRef.current.style.transform = 'translateX(1rem)'
 }

 
 const closeMuenu = () =>{
  sideMenuRef.current.style.transform = 'translateX(16rem)'
 }

 useEffect(() => {
  window.addEventListener('scroll', ()=> {
    if(scrollY > 50){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
  })
 },[])


  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y[-80%]'>
      <Image src={assets.header_bg_color} alt='' className='w-full'/>
    </div>
     <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""}`}>
        <a href="#top">
            <Image src={assets.logo} alt=''  className='w-48 h-25 cursor-pointer mr-14'/>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
            <li><a href="#top">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>

            <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-700 rounded-full ml-4 ' href="#contact">Contact <Image src={assets.arrow_icon} alt='' className='w-3 '/></a>

            <button className='block md:hidden ml-3' onClick={openMuenu}>
              <Image src={assets.menu_black} alt='' className='w-6 ' />
            </button>
        </div>

        {/* ........... Mobile Menu ........ */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64  z-50 h-screen bg-rose-300 transistion duration-500'>

          <div className='absolute right-6 top-6' onClick={closeMuenu}>
            <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>

            <li><a onClick={closeMuenu} href="#top">Home</a></li>
            <li><a onClick={closeMuenu} href="#about">About</a></li>
            <li><a onClick={closeMuenu} href="#services">Services</a></li>
            <li><a onClick={closeMuenu} href="#work">Projects</a></li>
            <li><a onClick={closeMuenu} href="#contact">Contact</a></li>
        </ul>
     </nav> 
    </>
  )
}

export default Navbar
