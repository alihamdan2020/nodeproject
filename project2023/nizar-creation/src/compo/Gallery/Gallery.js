import './lightbox.css'
import './Gallery.css'
import GalleryPicture from './gallery-picture/GalleryPicture'
import { useEffect, useState } from 'react';

import axios from 'axios';
import Data from './Data'
import Landing from '../Home/Landing/Landing'

export default function Gallery(){
    let [data,setData]=useState([]);

    useEffect(()=>{
        async function fetchData(){
        let dataJson=await  axios.get('/Data.json')
        setData(dataJson.data)
        }
      fetchData() 
    },[])
    

const result=Data.map(function(x){
    return <GalleryPicture img={x.img} title={x.title}/>
})

    return(
        <div>
            <Landing />
        <div className="gallery">
           {result}
        </div>
        </div>
    )
}