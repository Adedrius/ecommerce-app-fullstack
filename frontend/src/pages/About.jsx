import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Cenchhhhh Forever was created from a passion for innovation and a goal to transform online shopping. Our journey started with a simple vision: to offer a platform where customers can easily browse, explore, and buy a variety of products from the comfort of their own homes.</p>
              <p>Since our launch, we've dedicated ourselves to curating a diverse range of top-quality products to suit every taste and need. From fashion and beauty to electronics and home essentials, we offer an extensive selection from trusted brands and suppliers.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At Forever, our mission is to give customers the power of choice, convenience, and trust. We are committed to offering a smooth shopping journey that goes beyond expectations, from browsing and ordering to delivery and beyond.</p>
          </div>
      </div>

      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className=' text-gray-600'>We carefully choose and evaluate every product to ensure it meets our high-quality standards</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convinience:</b>
            <p className=' text-gray-600'>Our intuitive interface and seamless ordering system make shopping simpler than ever.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service:</b>
            <p className=' text-gray-600'>Our committed team is here to support you every step of the way, with your satisfaction as our main focus.</p>
          </div>
      </div>

      <NewsletterBox />
      
    </div>
  )
}

export default About
