import './index.scss'
import profile from '../../assets/images/GT.png'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A','b','o','u','t',' ','m','e']}
            idx={15}
          />
        </h1>
        <div className="content">
          <p>
            I am currently a student working on my Bachelor's in Computer Science
            at the Georgia Institute of Technology. My concentrations are in 
            System Architecture and Information Infonetworks. I am always looking
            for ways to expand my knowledge about the field!
          </p>
          <p>
            As an aspiring software engineer, I am always looking for new projects
            to work on and solving problems that require ingenuity. I prefer to work
            on the back-end side of development as that is where my strengths lie, but
            am also willing to learn more about front-end (hence me making this website)
            and full-stack!
          </p>
          <p>
            I am always looking for new opportunities within the field!
          </p>
        </div>
      </div>
      <div className="image-zone">
        <img src={profile} alt="profile"/>
      </div>
    </div>
  )
}


export default About