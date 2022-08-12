import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_s5ir3xa',
        'template_6j5kxfy',
        refForm.current,
        'dghC7Ko0_iMoJiJlJ'
      )
      .then(
        () => {
          alert("Messsage successfully sent!")
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (
  <>
    <div className="container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={['C', 'o','n','t','a','c', 't', ' ', 'm', 'e']}
            idx={15}
            />
        </h1>
        <p>
          I am interested in intern positions for software engineering, 
          software development, and product management. I am also open 
          to contributing to interesting projects. If you think I would be 
          a good fit for either, or you simply have a question, feel free to 
          contact me!
        </p>
        <div className="contact-form">
          <form ref={refForm} onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type="text" name="name" placeholder="Name" required/>
              </li>
              <li className='half'>
                <input type="email" name="email" placeholder="Email" required/>
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required/>
              </li>
              <li>
                <textarea placeholder="Message" name="message" required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className='info-map'>
        Kevin Jiang,
        <br />
        United States,
        <br />
        Georgia,
        <br />
        Atlanta
        <span>kjiang72@gatech.edu</span>
      </div>
      <div className="map-wrap">
        <MapContainer center={[33.7756, -84.3963]} zoom={13} scrollWheelZoom={true}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[33.7756, -84.3963]}>
            <Popup> My School </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  </>
  )
}

export default Contact