import Image from 'next/image'
import React from 'react'
import ButtonSecondary from './ButtonSecondary'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-background">
        <Image src='banner.svg' width={0} height={0} className="hero-banner" alt='' />
        <div className="hero-tag">
            <div className="Text-XXS regular hero-tag_title">National 3D design studio</div>
            <div className="Text-XS medium hero-tag_subtitle">Yusp is a 3D studio specializing in 3D modeling, rendering, and animation of objects and characters. We were founded in 2021 by DAN and Yuki, two experienced 3D artists with a passion for using technology to bring creativity to life.</div>
            <div className="hero-tag_grp"><ButtonSecondary icon={false} title='Behance' />/<ButtonSecondary icon={false} title='Linkedin' /></div>
        </div>
      </div>
      <div className="hero-heading">
        <div className="Heading-XL bold heading">We help you make your Dream</div>
        <div className="Text-L regular desc">We're your partners in creating a truly immersive and engaging gaming experience.</div>
        <div className="grp">
          <Image src="arrow-down.svg" width={18} height={38} alt='' />
          <div className="Text-Tag regular">swipe</div>
        </div>
      </div>
    </div>
  )
}

export default Hero