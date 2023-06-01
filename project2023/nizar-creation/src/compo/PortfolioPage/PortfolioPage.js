import { HashLink as Links } from 'react-router-hash-link';
import Data from './PortfolioImages'
import PortfolioPageCss from './PortfoiloPage.module.css'

function PortfolioPage(){

return(
    <div className={PortfolioPageCss.main}>
        <div id="1">
            <h1 className={PortfolioPageCss.sectionHeading}>Abou Abed</h1>
            <div className={PortfolioPageCss.images}>
                {
                    Data.map(function(x){
                        if(x.cat===1)
                        return <a href={x.img} data-lightbox={x.cat}><div key={x.id}><img src={x.img} style={{width:'100%'}}/></div></a>
                    })
                }
            </div>
        </div>
        
        <div id="2">
            <h1 className={PortfolioPageCss.sectionHeading}>Tfaddal Grocery</h1>
            <div className={PortfolioPageCss.images}>
                {
                    Data.map(function(x){
                        if(x.cat===2)
                        return <a href={x.img} data-lightbox={x.cat}><div key={x.id}><img src={x.img} style={{width:'100%'}}/></div></a>
                    })
                }
            </div>
        </div>

        <div id="3">
            <h1 className={PortfolioPageCss.sectionHeading}>Vector Art</h1>
            <div className={PortfolioPageCss.images}>
                {
                    Data.map(function(x){
                        if(x.cat===4)
                        return <a href={x.img} data-lightbox={x.cat}><div key={x.id}><img src={x.img} style={{width:'100%'}}/></div></a>
                    })
                }
            </div>
        </div>

        <div id="4">
            <h1 className={PortfolioPageCss.sectionHeading}>Phonenix Clean</h1>
            <div className={PortfolioPageCss.images}>
                {
                    Data.map(function(x){
                        if(x.cat===3)
                        return <a href={x.img} data-lightbox={x.cat}><div key={x.id}><img src={x.img} style={{width:'100%'}}/></div></a>
                    })
                }
            </div>
        </div>
       
        <div id="5">
            <h1 className={PortfolioPageCss.sectionHeading}>Caricature</h1>
            <div className={PortfolioPageCss.images}>
                {
                    Data.map(function(x){
                        if(x.cat===5)
                        return <a href={x.img} data-lightbox={x.cat}><div key={x.id}><img src={x.img} style={{width:'100%'}}/></div></a>
                    })
                }
            </div>
        </div>
        
    </div>
)

}

export default PortfolioPage