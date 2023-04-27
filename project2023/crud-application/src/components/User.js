import { Link } from "react-router-dom";

export default function User(props){
    return(
        <div style={{
            display:"flex",
            gap:"10px",
            justifyContent:"space-between",
            width:'200px'
        }}>
        <span>{props.name}</span>
        <span>{props.email}</span>
        <Link to={`/users/edit/${props.id}`}>Edit</Link>
        </div>
    )
}