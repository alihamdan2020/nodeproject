import GamingData from '../../Data/GamingData'
import GameLine from '../GameLine/GameLine'
import Button from '../Button/Button'
import './Gaming.css'
function Gaming(){

    const games=GamingData.map(function(x){
        return <GameLine key={x.id} name={x.name} subname={x.subname} date={x.date_added} hours={x.hours} image={x.img} status={x.status}/>
    })
    return(
        <div className='section-wrapper gaming-library'>
        <h1 className='title'><span>Your Gaming</span><span>Library</span></h1>
        <div className='gaming-repet'>
        {games}
        </div>
       <Button title='View Your Library' div='btn-section'/>
        </div>
    )
}

export default Gaming