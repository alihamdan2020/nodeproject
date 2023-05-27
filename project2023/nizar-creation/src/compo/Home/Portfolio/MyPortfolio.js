import PortfolioCard from './PortfolioCard/PortfolioCard'
import {Data} from './PortfolioData'
import portfolioCardCss from './PortfolioCard/PortfolioCard.module.css'


export default function MyPortfolio() {

	let result=Data.map(function (x){
	
		return <PortfolioCard id={x.id} PortfolioImage={x.PortfolioImage}/>
	})
	
    return(
        <div className="services" id="portfolio">
		<div className="container" >
			<div className="title">
				<h3 className="main-title">portfolio</h3>
			</div>
			<div className={portfolioCardCss.contentgallery}>
			{result}
			</div>
		</div>
	</div>
    )
}