import Movie from '../Movie/Movie'
import Data from '../../Data/Data'
import Button from '../Button/Button'
import './Most.css'

function Most(){

    const mov=Data.map(function(x){
        return <Movie name={x.name} subname={x.subname} rate={x.rate} size={x.size} image={x.img}/>
    })
    return(
        <div className='section-wrapper'>
        <h1 className='title'><span>Most Popular</span><span>Right Now</span></h1>
        <div className='section-repet'>
        {mov}
        </div>
       <Button title='Discover Popular' div='btn-section'/>
        </div>
    )
}

export default Most