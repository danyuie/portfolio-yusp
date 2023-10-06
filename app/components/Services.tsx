"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import ButtonSecondary from './ButtonSecondary';
import Image from 'next/image';


const Services = () => {
  return (
    <div className="services space-global">
      <SectionHeading
      tag='Services' 
      headingDark='Creative solutions'
      headingGrey='crafted to help you achieve the perfect digital presence'/>

      <div className="services-box">
        <div className="services-box_bigItem">
          <div className="services-bigItem">
            <div className="heading Text-L medium">Character Design</div>
            <div className="desc Text-S regular">We offer character design services from initial concept to final product, creating characters in a variety of styles, from realistic to stylized. We can also create characters to meet your specific requirements, such as a character based on a real person or a character with special features.</div>
            <div className="process">
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Planning: We will discuss your ideas with you to understand your needs.</div>
              </div>
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Development: Create initial sketches and 3D models of the character</div>
              </div>
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Revisions: We will make any revisions as requested.</div>
              </div>
            </div>
            <button
          className='button button-secodary button-color'>
            <span className=''>
              Learn More
            </span>
            <Image 
            src='arrow-right-light.svg'
            width={20}
            height={20}
            alt=""/>
          </button>
          </div>
          <div className="services-bigItem">
            <div className="heading Text-L medium">3D Modeling & Texturing</div>
            <div className="desc Text-S regular">We use advanced modeling and texturing software to create high-quality 3D characters. We also have experience creating characters for a variety of purposes, including games, films, and animation.  Our process includes the following steps:</div>
            <div className="process">
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Modeling: Create a 3D model based on sketches or 2D models.</div>
              </div>
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Texturing: Add textures for skin, hair, clothing, and surroundings.</div>
              </div>
              <div className="process-item">
                <Image src='dot.svg' width={10} height={10} alt='' />
                <div className="span Text-XXS medium">Rendering: We will create high-quality images and videos of the character.</div>
              </div>
            </div>
            <button
          className='button button-secodary button-color'>
            <span className=''>
              Learn More
            </span>
            <Image 
            src='arrow-right-light.svg'
            width={20}
            height={20}
            alt=""/>
          </button>
          </div>
        </div>
        <div className="services-box_smallItem">
          <div className="services-smallItem">
            <div className="heading Text-L medium">Rigging</div>
            <div className="desc Text-S regular">We will create a rig for the character to allow for movement and expressions.</div>
          </div>
          <div className="services-smallItem">
            <div className="heading Text-L medium">Animation</div>
            <div className="desc Text-S regular">We will create movements for the character, including walking, expressions, and actions.</div>
          </div>
          <div className="services-smallItem">
            <div className="heading Text-L medium">Environments</div>
            <div className="desc Text-S regular">We can create environments for your characters, such as landscapes, buildings, interiors.</div>
          </div>
          <div className="services-smallItem">
            <div className="heading Text-L medium">Props</div>
            <div className="desc Text-S regular">We can create props for your characters, such as weapons, tools, and clothing.</div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Services