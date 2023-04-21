import '../../assets/css/fontawesome.css'
import './Movie.css'
import { FaStar ,FaDownload} from "react-icons/fa";

function Movie(props){
return(
    <div className="movie">
        <div className='image-movie' style={{backgroundImage:`url(${props.image})`}}>

        </div>
   
        <div className='moviename'><p>{props.name}</p><p>{props.rate}<FaStar className='istar' /></p></div>
        <div className='moviename'><p>{props.subname}</p><p>{props.size}<FaDownload className='idownload'/></p></div>
    </div> 
)
}

export default Movie