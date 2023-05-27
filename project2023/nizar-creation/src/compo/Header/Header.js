import HeaderCss from'./Header.module.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Data} from './Data'
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
  
    let links=Data.map(function(item,index) {
       let myClass=index===0 ? HeaderCss.frstlink : HeaderCss.a  ;
    //    let toPath=index===3 ? '' : item.to  ;
    return <li key={item.id}><Links to={item.to} className={myClass}>{item.link}</Links></li>;
    })

    var height=openMenu? {"height":"418px"} : {"height":"90px"};
    
    
    return(
        <div style={height} className={HeaderCss.container}>
        <header  className={HeaderCss.header}>
        <Link to="/"><img src={logo} className={HeaderCss.img} alt='not found'/></Link>
        <ul className={HeaderCss.mainul}>
        <li><Links to='/' className={HeaderCss.firstlink}>Home</Links></li>
        <li><Links  to='/about' className={HeaderCss.a}>About</Links></li>
        <li>
            <Links onClick={showMenu}  className={HeaderCss.portfolio}>Portfolio <FaAngleDown className={HeaderCss.fontAwesomIcon} /></Links>
                <ul className={HeaderCss.subul} id='subMenu'>
                    <li><Links to='/' className={HeaderCss.a}>portfolio1</Links></li>
                    <li><Links to='/' className={HeaderCss.a}>portfolio2</Links></li>
                    <li><Links to='/' className={HeaderCss.a}>portfolio3</Links></li>
                    <li><Links to='/' className={HeaderCss.a}>portfolio4</Links></li>
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