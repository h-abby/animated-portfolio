import React from 'react'
import Card from '../Card/Card'
import mern from '../../assets/mern.png'
import java from '../../assets/java.png'
import dsa from '../../assets/dsa.png'
import './About.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function About() {
    useGSAP(()=> {
        gsap.from(".circle", {
            x: -100,
            opacity:0,
            duration: 0.7,
            stagger: 1,
            scrollTrigger: {
              trigger: ".circle",
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            }
        })
        gsap.from(".line", {
            x: -100,
            opacity:0,
            duration: 0.7,
            stagger: 1,
            scrollTrigger: {
              trigger: ".line",
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            }
        })
        gsap.from(".about-details h1", {
            x: -100,
            opacity:0,
            duration: 0.7,
            stagger: 1,
            scrollTrigger: {
              trigger: ".about-details h1",
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            }
        })
        gsap.from(".about-details ul", {
            x: -100,
            opacity:0,
            duration: 0.7,
            stagger: 1,
            scrollTrigger: {
              trigger: ".about-details ul",
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            }
        })
        gsap.from(".right-about", {
            x: 100,
            opacity:0,
            duration: 0.7,
            stagger: 1,
            scrollTrigger: {
              trigger: ".right-about",
              start: "top 60%",
              end: "top 30%",
              scrub: 1,
            }
        })
    })
  return (
    <div id="about" className="section">
        <div className="left-about">
            <div className="line-circle">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="about-details">
                <div className="personal-info">
                    <h1>PERSONAL INFO</h1>
                    <ul>
                        <li>
                            <span>NAME</span> : JOHN DOE
                        </li>
                        <li>
                            <span>ِAGE</span> : 21
                        </li>
                        <li>
                            <span>GENDER</span> : MALE
                        </li>
                        <li>
                            <span>LANGUAGES</span> : ENGLISH, ARABIC
                        </li>
                    </ul>
                </div>
                <div className="education">
                    <h1>EDUCATION</h1>
                    <ul>
                        <li>
                            <span>DEGREE</span> : BTECH
                        </li>
                        <li>
                            <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
                        </li>
                    </ul>
                </div>
                <div className="skills">
                    <h1>SKILLS</h1>
                    <ul>
                        <li>MERN STACK WEB DEVELOPER</li>
                        <li>JAVA</li>
                        <li>DSA</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="right-about">
            <Card title="MERN STACK WEB DEVELOPER" image={mern}/>
            <Card title="JAVA" image={java}/>
            <Card title="DSA" image={dsa}/>
        </div>
    </div>
  )
}

export default About