import React,{useRef} from 'react'
import './Navbar.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Navbar() {
    const menu = useRef()
    const mobile = useRef()
    useGSAP(()=> {
        const tl = gsap.timeline()
        tl.from("nav h1", {
            y: -100,
            duration: 0.7,
            opacity: 0,
        })
        tl.from("nav ul li", {
            y: -100,
            duration: 0.7,
            opacity: 0,
            stagger: 0.5,
        })
    })
  return (
    <nav>
        <h1>PORTFOLIO</h1>
        <ul className="desktop-menu">
            <li>
                <a href="#home" className='link'>Home</a>
            </li>
            <li>
                <a href="#about" className='link'>About</a>
            </li>
            <li>
                <a href="#projects" className='link'>Projects</a>
            </li>
            <li>
                <a href="#contact" className='link'>Contact</a>
            </li>
        </ul>
        <div className="hamburger" ref={menu} 
        onClick={()=> { 
            menu.current.classList.toggle('active-ham')
            mobile.current.classList.toggle('active-menu')
        }}>
            <span className="ham"></span>
            <span className="ham"></span>
            <span className="ham"></span>
        </div>
        <ul className="mobile-menu" ref={mobile}>
            <li>
                <a href="#home" className='link'>Home</a>
            </li>
            <li>
                <a href="#about" className='link'>About</a>
            </li>
            <li>
                <a href="#projects" className='link'>Projects</a>
            </li>
            <li>
                <a href="#contact" className='link'>Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar