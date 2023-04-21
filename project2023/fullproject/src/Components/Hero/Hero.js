import './Hero.css'
import Button from '../Button/Button'
function Hero(){
return(
    <div className="hero">
        <div className='content'>
        <h3>Welcom to Cyborg</h3>
        <h1><span>browse</span> our popular game here</h1>
        <Button title='Browse Mores' class='hero-Button'/>
        </div>
    </div>
)
}

export default Hero