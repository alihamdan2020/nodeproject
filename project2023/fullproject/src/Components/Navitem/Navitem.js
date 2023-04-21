import { Link } from "react-router-dom"
function Navitem(props){
    return (
        <li><Link to={props.link}>{props.text}{props.children}</Link></li>
    )
}

export default Navitem