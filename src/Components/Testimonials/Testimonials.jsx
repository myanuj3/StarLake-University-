import React, { useRef } from 'react'
import './Testimonials.css'

import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'

import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

export const Testimonials = () => {

    const slider = useRef();
    let tx=0;
  
    const slideForward=()=>{
          if(tx > -50){
            tx -= 25;
          }
          slider.current.style.transform = `translatex(${tx}%)`
    }
    const slideBackward=()=>{
        if(tx < 0){
            tx += 25;
          }
          slider.current.style.transform = `translatex(${tx}%)`
        
        
    }



  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward
        }/>
        
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt=""/>
                        </div>
                        <div>
                            <h3>Riya Singh</h3>
                            <span>StarLake University, India</span>
                            <p>
                                 StarLake University provides a supportive and vibrant learning environment with a diverse range of academic programs. The professors are highly knowledgeable and approachable, often willing to go the extra mile to help students succeed.
                           </p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt=""/>
                        </div>
                        <div>
                            <h3>Aditya Singh</h3>
                            <span>StarLake University, India</span>
                            <p>
                               StarLake University provides a supportive and vibrant learning environment with a diverse range of academic programs. The professors are highly knowledgeable and approachable, often willing to go the extra mile to help students succeed.
                           </p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt=""/>
                        </div>
                        <div>
                            <h3>Swati Singh</h3>
                            <span>StarLake University,</span>
                            <p>
                                 StarLake University provides a supportive and vibrant learning environment with a diverse range of academic programs. The professors are highly knowledgeable and approachable, often willing to go the extra mile to help students succeed.
                            </p>
                        </div>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt=""/>
                        </div>
                        <div>
                            <h3>Anubhav Singh Singh</h3>
                            <span>StarLake University, India</span>
                            <p>
                               StarLake University provides a supportive and vibrant learning environment with a diverse range of academic programs. The professors are highly knowledgeable and approachable, often willing to go the extra mile to help students succeed.
                            </p>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
    </div>
  )   
}
