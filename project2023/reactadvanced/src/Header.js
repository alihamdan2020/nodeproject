import react from 'react'
import Links from './Links'

class Header extends react.Component{

render(){

    return(
        <header>
            <img src="logo192.png"/>
            <Links />
        </header>
    )
}


}


export default Header