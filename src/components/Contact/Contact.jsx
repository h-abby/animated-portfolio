import React from 'react'
import './Contact.css'
import con from '../../assets/contact.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Contact() {
  useGSAP(()=> {
    gsap.from(".left-contact img", {
      x: -100,
      opacity:0,
      duration: 0.7,
      scrollTrigger: {
        trigger: ".left-contact img",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      }
  })
    gsap.from("form", {
      x: 100,
      opacity:0,
      duration: 0.2,
      scrollTrigger: {
        trigger: ".left-contact img",
        scrub: 1,
      }
  })

  })
  return (
    <div id="contact" className="section">
        <div className="left-contact">
            <img src={con} alt="" />
        </div>
        <div className="right-contact">
            <form action="#">
                <input type="text" name='name' placeholder='Name' />
                <input type="email" name='email' placeholder='Email' />
                <textarea name="message" placeholder='Message'></textarea>
                <input type="submit"  value='Submit' className='submit-btn'/>
            </form>
        </div>
    </div>
  )
}

export default Contact