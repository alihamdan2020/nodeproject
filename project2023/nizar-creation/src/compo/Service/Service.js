import './Service.css'
import {Data} from '../Home/Services/ServicesData'
import { Helmet } from 'react-helmet'
import Paragraph from './Paragraph'

// import baguetteBoxMin from 'baguettebox.js';

export default function Service(props){
   
//     window.addEventListener('load', function() {
 
//     baguetteBoxMin.run('.gallery1');
//     baguetteBoxMin.run('.gallery2');
//     baguetteBoxMin.run('.gallery3');
//     baguetteBoxMin.run('.gallery4');
//     baguetteBoxMin.run('.gallery5');
// });



    let paragraphResult=Data.map(function(text){
        return(
            <Paragraph text={text.serviceDesc}/>
        )
    })
    let result=Data.map(function(service){
        return (

            <div className='service' key={service.id} id={service.id}>
            <h1>{service.serviceName}</h1>
            <div className={service.gallery}>

            {service.images.map(function(imgname){
                return (
                    // by default data-light-box='model' but i changed to set to class of each div
                    //another way, each srservice images div i det it to specia; class such as gallery1
                    //when lightbox opeb for this section, only it display image gallery1
                <div style={{display:'flex',alignItems:'center'}}>
                <a href={imgname.imgName} data-lightbox={service.gallery}  title={imgname.title}>
                <img src={imgname.imgName} className='serviceimg' alt='not foud' />  
                </a>
                </div>
                )
                
            })}
            </div>
            <p>
            { 
            <Paragraph text={service.serviceDesc}></Paragraph>
            }
            </p>
            </div>
        )
    })
    
    return(

        <div className='service'>
            <Helmet>
        <title>Services</title>
        </Helmet>
        {result}
       </div>
    )
}