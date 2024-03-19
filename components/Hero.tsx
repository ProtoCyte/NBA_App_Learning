"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';
const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          NBA Stats
        </h1>
        
        <div className='hero__subtitle'>
          Find any stat you want
        </div>
        <div className="flex justify-start items-center gap-4">
          <CustomButton 
          title="Browse Teams"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
            />
          {/* <CustomButton 
          title="Explore Players"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
            />
          <CustomButton 
          title="Predict Wins"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
            />   */}
        </div>

      </div>
      <div className="hero__image-container">
        <div className='hero__image'>
          <Image src="/theshot.png" alt="Michael Jordan's Famous Shot"
          fill className="object-contain">
          </Image>
        </div>

      </div>
    </div>
  )
}

export default Hero