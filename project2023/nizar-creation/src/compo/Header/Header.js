import './Header.css'
import logo from '../../images/logo.jpeg'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useEffect } from 'react'


function Header(){
    useEffect(() => {
        test()
   }, [])

   function test(){
    var a =document.getElementsByClassName('icon-bars')[0];
    var listmenu=document.getElementsByClassName('main-ul')[0];
    var header=document.getElementsByTagName('header')[0];
    a.addEventListener("click",function(){
       header.classList.toggle("show");
       
       
        
    })
   }
    return(
        <header>
        <Link to="/"><img src={logo}/></Link>
        <ul className='main-ul'>
        <li><Link to='/' className='frst-link'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to='/gallery'>Gallery</Link></li>
         </ul>
        <div className='div-burger'>
        <FaBars className='icon-bars'/>
        </div>
        </header>
    )
}

export default Header