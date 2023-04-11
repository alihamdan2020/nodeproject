import react from 'react'

function List(props) {
    return(
            <li>
                <img src={props.img}/>
                <input type="checkbox" id={props.id}></input>
                <label for={props.id}>{props.media}</label>
            </li>
    )
}

export default List