import './Button.css'

function Button(props){
return(
    <div className={props.div}>
        <a href='#'  className={props.class}>{props.title}</a>
    </div>
)
}

export default Button