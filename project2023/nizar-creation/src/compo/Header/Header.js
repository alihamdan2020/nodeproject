import HeaderCss from'./Header.module.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import { HashLink as Links } from 'react-router-hash-link';
import {FaAngleDown} from 'react-icons/fa'

function Header(){
let showMenu=()=>{
    let subMenu=document.querySelector("#subMenu")
    if(subMenu.style.display=='')
    subMenu.style.display='block'
    else
    subMenu.style.display=''
}
    let [openMenu,setOpenMenu]=useState(false);
    
    const ToggleMenu=function(){
       setOpenMenu(function(x){
        return !x;
       })
    }
  
    var height=openMenu? {"height":"418px"} : {"height":"80px"};
   
    
    return(
        <div style={height} className={HeaderCss.container}>
        <header  className={HeaderCss.header}>
        <Link to="/"><img src={logo} className={HeaderCss.img} alt='not found'/></Link>
        <ul className={HeaderCss.mainul}>
        <li><Links to='/' className={HeaderCss.firstlink}>Home</Links></li>
        <li><Links  to='/about' className={HeaderCss.a}>About</Links></li>
        <li>
            <Links onClick={showMenu}  className={HeaderCss.portfolio}>Portfolio <FaAngleDown className={HeaderCss.fontAwesomIcon} /></Links>
                <ul className={HeaderCss.subul} id='subMenu' onClick={showMenu}>
                    <li><Links to='/portfolio/#1' className={HeaderCss.a}>Abou Abed</Links></li>
                    <li><Links to='/portfolio/#2' className={HeaderCss.a}>Tfaddal Grocery</Links></li>
                    <li><Links to='/portfolio/#3' className={HeaderCss.a}>Vector Art</Links></li>
                    <li><Links to='/portfolio/#4' className={HeaderCss.a}>Phonenix Clean</Links></li>
                </ul>
        
        </li>
        <li><Links to='./#services' className={HeaderCss.a}>Services</Links></li>
        <li><Links to='/prices' className={HeaderCss.a}>Prices</Links></li>
        <li><Links to='/blog' className={HeaderCss.a}>Blog</Links></li>
        <li><Links to='/contact' className={HeaderCss.a}>Contact</Links></li>
         </ul>
        <div className={HeaderCss.burger}>
        <FaBars className={HeaderCss.bars} onClick={ToggleMenu}/>
        </div>
        </header>
        </div>
    )
}

export default Header