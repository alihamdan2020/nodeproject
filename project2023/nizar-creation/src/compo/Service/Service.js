import './Service.css'
import {Data} from '../Home/Services/ServicesData'
import { useEffect } from 'react'

// import baguetteBoxMin from 'baguettebox.js';

export default function Service(){
//     window.addEventListener('load', function() {
 
//     baguetteBoxMin.run('.gallery1');
//     baguetteBoxMin.run('.gallery2');
//     baguetteBoxMin.run('.gallery3');
//     baguetteBoxMin.run('.gallery4');
//     baguetteBoxMin.run('.gallery5');
// });


    // let cont=[]
    // var i,j;
    // let getImage=(()=>{
        
    //     for(i=0;i<Data.length;i++){
    //         for(j=0;j<Data[i].images.length;j++)
    //     cont.push(Data[i].images[j])
    //     }
    //     console.log(cont)
    //     return (cont)
    // })

    // useEffect(function(){
    //     getImage()
    // },[])

    let result=Data.map(function(service){
        return (

            <div className='service' key={service.id}>
            <h1>{service.serviceName}</h1>
            <div className={service.gallery}>

            {service.images.map(function(imgname){
                return (
                    // by default data-light-box='model' but i changed to set to class of each div
                    //another way, each srservice images div i det it to specia; class such as gallery1
                    //when lightbox opeb for this section, only it display image gallery1
                <a href={imgname.imgName} data-lightbox={service.gallery}  title={imgname.title}>
                <img src={imgname.imgName} className='serviceimg' alt='not foud' key={imgname}/>  
                </a>
                )
                
            })}
            </div>
            <p>
            {service.serviceDesc}
            </p>
            <div>
                {/* {getImage} */}
            </div>
            </div>
        )
    })
    
    return(
        <div className='service'>
        {result}
       </div>
    )
}