import React, {useState, useEffect} from "react"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"


function App() {
  const [currentSec, setCurrentSet] = useState('')

  useEffect(()=> {
   const sectionEls = document.querySelectorAll('.section');

   const scrollHandler = ()=> {
    sectionEls.forEach(sectionEl => {
    if (window.scrollY >= sectionEl.offsetTop - 300) {
       setCurrentSet(sectionEl)
    }
   })
  }

   window.addEventListener('scroll', scrollHandler)

   return ()=>window.removeEventListener('scroll', scrollHandler)
  },[])

  useEffect(()=> {
    const linkEls = document.querySelectorAll('.link')

    const currAct = document.querySelector('.act')
    if (currAct) currAct.classList.remove('act')
      
    linkEls.forEach(linkEl=> {
      const href = new URL(linkEl).href

      if (href.includes(currentSec.id)) {
        linkEl.classList.add('act') 
      }
    })
  },[currentSec])

  useEffect(()=> {
    const url = window.location.href
    const linkEls = document.querySelectorAll('.link')

    linkEls.forEach( linkEl => {
    const href = new URL(linkEl).href
  
    if (url === href) {
      linkEl.classList.add('act')
      document.querySelector('.act')?.classList.remove('act')

      }
   })

   if (!window.location.hash) {
    document.querySelector('.link').classList.add('act')
   }
  

  },[])
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
    </>
  )
}

export default App
