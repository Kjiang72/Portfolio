import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faAndroid, faGitAlt, faReact, faJsSquare} from '@fortawesome/free-brands-svg-icons'
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
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className="face1">
            <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faJava} color="#D0A384" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faAndroid} color="#A4C639" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
        </div>
      </div>
    </div>
  )
}


export default About