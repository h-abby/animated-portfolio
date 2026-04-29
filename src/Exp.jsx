import React, {useRef} from 'react'
import './components/Navbar/Navbar.css'
function Exp() {
    const menu = useRef()
  return (
        <div className="hamburger" ref={menu} id="hamburger-6" 
        onClick={()=> menu.current.classList.toggle('active-ham') }>
          <span className="ham"></span>
          <span className="ham"></span>
          <span className="ham"></span>
        </div>  

        //         <div className="hamburger" ref={menu} 
        // onClick={()=> { 
        //     menu.current.classList.toggle('active-ham')
        //     mobile.current.classList.toggle('active-menu')
        // }}>
        //     <span className="ham"></span>
        //     <span className="ham"></span>
        //     <span className="ham"></span>
        // </div>
        )
}

export default Exp