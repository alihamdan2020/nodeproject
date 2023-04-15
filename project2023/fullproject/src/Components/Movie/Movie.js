import '../../assets/css/fontawesome.css'
import './Movie.css'

function Movie(props){
return(
    <div className="movie">
        <img src={props.image}/>
   
        <div className='moviename'><p>{props.name}</p><p>{props.rate}<i class="fa-solid fa-star"></i></p></div>
        <div className='moviename'><p>{props.subname}</p><p>{props.size}<i class="fa-solid fa-download"></i></p></div>
   
    </div>
)
}

export default Movie