import Movie from '../Movie/Movie'
import Data from '../../Data/Data'
import './Most.css'

function Most(){

    const mov=Data.map(function(x){
        return <Movie name={x.name} subname={x.subname} rate={x.rate} size={x.size} image={x.img}/>
    })
    return(
        <div className='movieswrapper'>
        <h1 className='title'><span>Most Popular</span><span>Right Now</span></h1>
        <div className='movies'>
        {mov}
        </div>
        <div className='Discover'>
            <a href="#">Discover popular</a>
        </div>
        </div>
    )
}

export default Most