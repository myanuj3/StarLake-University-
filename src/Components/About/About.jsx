import React from 'react'
import './About.css'

import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

export const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>A university is an institution of higher learning that offers undergraduate, graduate, and often doctoral programs across a variety of disciplines. Known for fostering academic research, critical thinking, and personal development.</p>
            <p>Universities often feature a diverse community of students and faculty, with access to specialized resources like libraries, labs, and research centers. Beyond academics, universities are also hubs for social, cultural, and extracurricular activities.</p>
        </div>

    </div>
  )
}
