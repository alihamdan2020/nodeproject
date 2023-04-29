import HeaderCss from'./Header.module.css'
import logo from '../../images/logo.jpeg'
import { Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import { useState } from 'react'
import {Data} from './Data'
import { HashLink as Links } from 'react-router-hash-link';

function Header(){


    let [openMenu,setOpenMenu]=useState(false);
    
    const ToggleMenu=function(){
       setOpenMenu(function(x){
        return !x;
       })
    }
  
    let links=Data.map(function(item,index) {
       let myClass=index===0 ? HeaderCss.frstlink : HeaderCss.a  ;
       let toPath=index===3 ? './#services' : item.to  ;
    return <li key={item.id}><Links to={toPath} className={myClass}>{item.link}</Links></li>;
    })

    var height=openMenu? {"height":"495px"} : {"height":"155px"};
    return(
        <div style={height}className={HeaderCss.container}>
        <header  className={HeaderCss.header}>
        <Link to="/"><img src={logo} className={HeaderCss.img}/></Link>
        <ul className={HeaderCss.mainul}>
        {links}
         </ul>
        <div className={HeaderCss.burger}>
        <FaBars className={HeaderCss.bars} onClick={ToggleMenu}/>
        </div>
        </header>
        </div>
    )
}

export default Header