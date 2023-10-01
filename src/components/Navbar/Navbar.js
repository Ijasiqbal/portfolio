import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

    const [NavOpen,setNavOpen] = useState(false)

    return ( 
        <div>
            <nav className="navbar">
                 <a id='ijas' href="">IJAS IQBAL </a>
                 <div className='optiongrp'>
                    <ul className={ NavOpen ? 'optionsActive' : 'options' }>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Project</a></li>
                        <li><a href="">Resume</a></li>
                    </ul>
                 </div>
                 <div id='mobile'>
                     <i className={NavOpen ? 'fas fa-times' : 'fas fa-bars'} onClick={()=>{setNavOpen(!NavOpen)}}></i>
                 </div>
            </nav>
        </div>
     );
}
 
export default Navbar;