import React from 'react'
import './Projects.css'
import Card from '../Card/Card'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import tti from '../../assets/tti.png'
import cb from '../../assets/cb.png'
import br from '../../assets/br.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
    useGSAP(()=> {
      gsap.from(".para", {
      y: 100,
      opacity:0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".para",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      }
    })
      gsap.from(".slider", {
      y: 100,
      opacity:0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".slider",
        start: "top 60%",
        end: "top 30%",
        scrub: 1,
      }
    })
  })

  return (
    <div id="projects" className="section">
        <h1 className='para'>2+ YEARS EXPERIENCE IN PROJECTS</h1>
        <div className="slider">
            <Card title="VIRTUAL ASSISTANT" image={va}/>
            <Card title="AI POWERED FITTNESS WEBSITE" image={fw}/>
            <Card title="AI TEXT TO IMAGE" image={tti}/>
            <Card title="AI CHAT BOT" image={cb}/>
            <Card title="AI BACKGROUND REMOVER" image={br}/>
        </div>
    </div>
  )
}

export default Projects