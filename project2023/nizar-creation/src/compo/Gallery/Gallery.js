import './lightbox.css'
import './Gallery.css'
import Data from './Data'
import GalleryPicture from './gallery-picture/GalleryPicture'

export default function Gallery(){

const result=Data.map(function(x){
    return <GalleryPicture img={x.img} title={x.title} />
})

    return(
        <div>
        <div className="gallery">
           {result}
        </div>
        </div>
    )
}