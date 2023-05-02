import { useEffect,useState } from 'react';
import Button from './ButtonToUp.module.css'
import {FaAngleDoubleUp} from 'react-icons/fa'

function ButtonToUp(){

    let [buttonShow,setButtonShow]=useState(false);
    useEffect(()=>{
        
        window.addEventListener("scroll",function(){
            if (window.scrollY>100)
            setButtonShow(true)
            else
            setButtonShow(false)
        })
    },[])


    let scrollToTop=() =>
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});

return(
    
    <div style={{opacity:buttonShow ? 1 : 0}} className={Button.btn} onClick={scrollToTop}>
    <FaAngleDoubleUp />
    </div>
)
}
export default ButtonToUp