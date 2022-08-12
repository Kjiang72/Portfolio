
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faAndroid, faGitAlt, faReact, faJsSquare} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['K', 'e', 'v','i','n',',']
  const jobArray = ['A', ' ', 'd','e','v','e','l','o','p','e','r','.']

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
        <span className={letterClass}>H</span>
        <span className={`${letterClass} _12`}>i,</span>
        <br />
        <span className={`${letterClass} _13`}>I</span>
        <span className={`${letterClass} _14`}>'m</span>
        <span className={`${letterClass} _15`}> </span>
        {/* <img src={LogoTitle} alt="developer"/> */}
        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
        <br />
        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={21} />
        </h1>
        <h2> Developer / Student / TA </h2>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
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
  );
}

export default Home