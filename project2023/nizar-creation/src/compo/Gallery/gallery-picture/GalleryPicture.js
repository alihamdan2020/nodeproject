export default function GalleryPicture(props){
    
    return(
        <>
        
        <a href={props.img} data-lightbox="models" data-title={props.title}>
        <img src={props.img}/>
        </a>
        </>
        
    )
}