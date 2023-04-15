import './Header.css'
import logo from '../../assets/images/logo.png'
import Navitem  from '../Navitem/Navitem'

// obligatory the name of parameter is props
const Header=() => {
    return(
        <header>
        <img src={logo}></img>
        <ul className='mainnav'>
            <Navitem link="#" text="Home"/>
            <Navitem link="#" text="Portfolio"/>
            <Navitem link="#" text="Gallery"/>
            <Navitem link="#" text="FAQ"/>
            <Navitem link="#" text="Contact Us"/>
            <Navitem link='#' text='Sub Menu'>
                <ul className='subnav'>
                <Navitem link="#" text="SubMenu 1"/>
                <Navitem link="#" text="SubMenu 2"/>
                <Navitem link="#" text="SubMenu 3"/>
                </ul>
            </Navitem>
            
            
        </ul>
        <div className='burger'>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </header>
    )}
    


export default Header