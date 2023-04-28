import HeaderCss from'./Header.module.css'
import logo from '../../images/logo.jpeg'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Data} from './Data'


function Header(){


    let [openMenu,setOpenMenu]=useState(false);
    
    const ToggleMenu=function(){
       setOpenMenu(function(x){
        return !x;
       })
    }
  
    let links=Data.map(function(item,index) {
       let myClass=index===0 ? HeaderCss.frstlink : HeaderCss.a  ;
    return <li key={item.id}><Link to={item.to} className={myClass}>{item.link}</Link></li>;
    })

    var height=openMenu? {"height":"495px"} : {"height":"160px"};
    return(
        <header style={height} className={HeaderCss.header}>
        <Link to="/"><img src={logo} className={HeaderCss.img}/></Link>
        <ul className={HeaderCss.mainul}>
        {links}
         </ul>
        <div className={HeaderCss.burger}>
        <FaBars className={HeaderCss.bars} onClick={ToggleMenu}/>
        </div>
        </header>
    )
}

export default Header