import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>We Ensure Better Education!</h1>
            <p>An education website serves as a valuable resource for students, teachers, and lifelong learners by providing access to a wide range of learning materials, courses, and tools. These websites often feature interactive lessons, tutorials, quizzes, and forums, allowing users to explore subjects at their own pace and deepen their knowledge on various topics.</p>
            <button className='btn'>Explore more<img src={dark_arrow} alt="arrow"/></button>
        </div>

    </div>
  )
}
