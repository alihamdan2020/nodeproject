import portfolioCardCss from './PortfolioCard.module.css'
import { HashLink as Links } from 'react-router-hash-link';

function Card(props)
{

    return(
        <>
				<div className={portfolioCardCss.gallerycard}>
                        <img src={props.PortfolioImage} className={portfolioCardCss.img}/>
				</div>
				
		</>
    )
}

export default Card
