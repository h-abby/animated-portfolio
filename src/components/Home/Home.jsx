import React from 'react'
import './Home.css'
import Typewriter from 'typewriter-effect'
import man from '../../assets/man.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {
  useGSAP(()=> {
    const tl1 = gsap.timeline()
    tl1.from(".line-1", {
      y: 80,
      opacity: 0,
      duration: 1,
    })
    tl1.from(".line-2", {
      y: 80,
      opacity: 0,
      duration: 1,
    })
    tl1.from(".line-3", {
      y: 80,
      opacity: 0,
      duration: 1,
    })
    gsap.from(".right-home", {
      x: 100,
      opacity: 0,
      duration: 1,
    })
  })
  return (
    <div id="home" className="section">
        <div className="left-home">
            <div className="home-details">
                <div className="line-1">I'M</div>
                <div className="line-2">JOHN DOE</div>
                <div className="line-3">
                 <Typewriter
                  options={{
                    strings: ['WEB DEVELOPER', 'SOFTWARE DEVELOPER','EDITOR'],
                    autoStart: true,
                    loop: true,
                  }}
                 />
                </div>
                <button className="hire-btn">HIRE ME</button>
            </div>
        </div>
        <div className="right-home">
          <img src={man} alt=""/>
        </div>
    </div>
  )
}


export default Home
