import Button from "../Button/Button"

function GameLine(props){
    return(
        <div className="line-game">
               <ul>
                <li className="image-line-game"><img src={props.image}></img></li>
                <li><h4>{props.name}</h4><span>{props.subname}</span></li>
                <li><h4>Date Added</h4><span>{props.date}</span></li>
                <li><h4>Hours played</h4><span>{props.hours}</span></li>
                <li><Button title={props.status} class='hero-Button'/></li>

                </ul>
        </div>
        )
}

export default GameLine