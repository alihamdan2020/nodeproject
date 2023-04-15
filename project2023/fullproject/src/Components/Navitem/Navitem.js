function Navitem(props){
    return (
        <li><a href={props.link}>{props.text}{props.children}</a></li>
    )
}

export default Navitem