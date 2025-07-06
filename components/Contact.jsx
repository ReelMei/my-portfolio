import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = () => {


    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "439f69aa-afef-4bec-88b6-b3d187bfa25f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5}}
    id='contact' className='w-full px-[12%] py-10 scroll-mt-20'>

        
      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5 }}
      className='text-center mb-2 text-lg'>
        Connect With Me
      </motion.h4>


      <motion.h2 
       initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.5, delay: 0.5 }}
      className='text-center text-5xl'>
        Get In Touch
      </motion.h2>

      <motion.p 
        initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'>
         Hey there, It's Enzo here. I'm sure by now, you know you want to work with me.. I'd love to hear from you! If you have ant offer, comment or feedback, please use the form below..  
         </motion.p>


      <motion.form
        initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.9}}
       onSubmit={onSubmit} className='max-w-2xl mx-auto'>


        <div className='grid grid-cols-1 md:grid-cols-2  gap-6 mt-10 mb-8'>

            <motion.input 
              initial={{x: -50, opacity: 0}}
             whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.1 }}
            type="text" placeholder='Please enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-white' name='name'/>


             <motion.input 
              initial={{x: 50, opacity: 0}}
             whileInView={{x: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.1 }}
             type="email" placeholder='Please enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-600 rounded-md bg-white' name='email'/>
        </div>
        <motion.textarea 
         initial={{y: 100, opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 1.3}}
        rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-e-gray-600 rounded-md bg-white mb-6' name='message'></motion.textarea>

        <motion.button
          whileHover={{scale: 1.05}}
          transition={{duration: 0.3}}
         type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black text-white rounded-full mx-auto hover:bg-rose-400 duration-500'>Submit Here <Image src={assets.right_arrow_white} alt='' className='w-4'/>
         </motion.button>

        <p className='mt-4'>
            {result}
        </p>
      </motion.form>


    </motion.div>
  )
}

export default Contact
